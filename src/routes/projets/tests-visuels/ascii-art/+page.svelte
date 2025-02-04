<script>
    import P5 from "p5-svelte"
    import Header from "../../header.svelte"
    import Parameters from "./Parameters.svelte"

    let characterSize = $state(16)
    export function setCharacterSize(value) {
        showP5 = false
        characterSize = value

        setTimeout(() => {
            showP5 = true
        }, 2)
    }

    let showP5 = $state(true)

    let sketch = (p5) => {
        let webcamVideo
        let asciiDiv

        // const density = `▓░@$#k/)1]+~:,-"'.`
        const density = `.'"-,:~+]1)/k#$@░▓`

        p5.setup = () => {
            asciiDiv = p5.createDiv("")
            p5.noCanvas()

            webcamVideo = p5.createCapture(p5.VIDEO, { flipped: true })
            webcamVideo.size(p5.windowWidth/(characterSize * 0.65), p5.windowHeight/characterSize)
            
            
            p5.fill(0)
            webcamVideo.hide()
        }
        
        p5.draw = () => {
            webcamVideo.loadPixels()

            asciiDiv.html("")
            
            
            for(let y = 0; y < webcamVideo.height; y++) {
                let htmlString = "<p class='ascii-art'>"
                let asciiString = ""
                    
                for(let x = 0; x < webcamVideo.width; x++) {
                    const pixelIndex = (x + y * webcamVideo.width) * 4 // *4 is to include variables r, b, b and a
                    
                    const r = webcamVideo.pixels[pixelIndex]
                    const g = webcamVideo.pixels[pixelIndex + 1]
                    const b = webcamVideo.pixels[pixelIndex + 2]
                    
                    const bw = (r + g + b) / 3
                    
                    const len = density.length
                    
                    p5.text(g, p5.width / 2, p5.height / 2)
                    const charIndex = p5.floor(p5.map(bw, 0, 255, 0, len-1))
                    
                    const character = density.charAt(charIndex)
                    
                    asciiString += character

                }

                htmlString += asciiString + "</p>"
                asciiDiv.html(htmlString, true)
            }
        }
    }
</script>

<div class="header-wrapper">
    <Header style="background-color: #000b;" />
</div>

<Parameters setCharacterSize={setCharacterSize} characterSize={characterSize} />

<div class="ascii-art" style="--charcterSize: {characterSize};">
    {#if showP5}
        <P5 {sketch}/>
    {/if}
</div>


<style>
    @import "../../../../lib/global.css";

    .ascii-art {
        --charcterSize: 6;

        background-color: #000;
        margin: 0;
        padding: 0;
        font-family: 'Courier New', Courier, monospace;
        color: #f00;
        font-size: calc(var(--charcterSize) * 1.1px);
        line-height: calc(var(--charcterSize) * 1px);

        white-space: nowrap;

        user-select: none;
    }
</style>
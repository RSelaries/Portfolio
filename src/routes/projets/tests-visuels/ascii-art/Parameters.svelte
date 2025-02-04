<script>
    let { setCharacterSize, characterSize } = $props()

    function changeCharacterSize(value) {
        characterSize = value
        setCharacterSize(value)
    }
</script>


<div class="parameters-wrapper">
    <div class="parameters">
        <div>
            <p>Taille des caractères</p>
            <div style="flex-direction: column;">
                <button onclick={() => changeCharacterSize(characterSize + 2 )}>↑</button>
                <button onclick={() => changeCharacterSize(characterSize - 2 )}>↓</button>
            </div>
        </div>
        <div>
            <p>Petit caaca</p>
            <button>CACA</button>
        </div>
    </div>
</div>


<style>
    .parameters-wrapper {
        position: absolute;

        left: 0;
    }
    
    .parameters {
        color: white;
        font-family: Lexend;
        font-weight: 300;
        font-size: 1.2rem;
        display: flex;
        padding: 10px;
        background-color: black;

        div {
            display: flex;
        }
    }
</style>
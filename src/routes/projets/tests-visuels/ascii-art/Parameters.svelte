<script>
    let { setBackgroundColor, setTextColor, setCharacterSize } = $props()

    let currentCharacterSize = $state(16)

    let isActive = $state(true)

    let sizeButtonActive = $state(["not-active", "not-active", "active", "not-active"])

    function selectSize(value, buttonId) {
        setCharacterSize(value)

        sizeButtonActive[0] = "not-active"
        sizeButtonActive[1] = "not-active"
        sizeButtonActive[2] = "not-active"
        sizeButtonActive[3] = "not-active"

        sizeButtonActive[buttonId] = "active"
    }
</script>


<div class="parameters-wrapper">
    <div class="param-button-wrapper">
        <button class="back" onclick={() => isActive = !isActive} >
            {#if isActive}
            {"<"}
            {:else}
            {">"}
            {/if}
        </button>
        {#if isActive}
        <div class="parameters">
            <h1>PARAMÈTRES</h1>
            <p>Taille</p>
            <div class="button-wrapper">
                <button onclick={() => selectSize(8, 0)} class="small {sizeButtonActive[0]}">.</button>
                <button onclick={() => selectSize(10, 1)} class="medium {sizeButtonActive[1]}">.</button>
                <button onclick={() => selectSize(16, 2)} class="large {sizeButtonActive[2]}">.</button>
                <button onclick={() => selectSize(24, 3)} class="extra-large {sizeButtonActive[3]}">.</button>
            </div>
            <p>Texte</p>
            <div class="button-wrapper">
                <button onclick={() => setTextColor("#000")} class="black">.</button>
                <button onclick={() => setTextColor("#f00")} class="red">.</button>
                <button onclick={() => setTextColor("#ff0")} class="yellow">.</button>
                <button onclick={() => setTextColor("#ff9807")} class="orange">.</button>
            </div>
            <div class="button-wrapper">
                <button onclick={() => setTextColor("#fff")} class="white">.</button>
                <button onclick={() => setTextColor("#50eb0e")} class="green">.</button>
                <button onclick={() => setTextColor("#4b79e6")} class="light-blue">.</button>
                <button onclick={() => setTextColor("#f64de2")} class="light-pink">.</button>
            </div>
            <p>Fond</p>
            <div class="button-wrapper">
                <button onclick={() => setBackgroundColor("#000")} class="black">.</button>
                <button onclick={() => setBackgroundColor("#fff")} class="white">.</button>
                <button onclick={() => setBackgroundColor("#330603")} class="red-text">.</button>
                <button onclick={() => setBackgroundColor("#370a34")} class="violet">.</button>
            </div>
            <div class="button-wrapper">
                <button onclick={() => setBackgroundColor("#8f1365")} class="pink">.</button>
                <button onclick={() => setBackgroundColor("#11255b")} class="blue">.</button>
                <button onclick={() => setBackgroundColor("#443b15")} class="dark-yellow">.</button>
                <button onclick={() => setBackgroundColor("#092b10")} class="dark-green">.</button>
            </div>
        </div>
        {/if}
    </div>
</div>


<style>
    .parameters-wrapper {
        position: absolute;

        height: 100vh;
        display: flex;
        flex-direction: row;

        align-items: center;

        left: 0;
    }

    .param-button-wrapper {
        display: flex;
        height: max-content;

        button.back {
            font-family: Poppins, serif;
            color: white;
            font-weight: 700;
            font-size: 2rem;
            padding: 5px;
            border: none;
            border-right: #777 solid 1px;
            background-color: #000;
        }

        .back:hover {
            cursor: pointer;
        }
    }

    h1 {
        font-family: Movement;
        font-size: 0.9rem;
        font-weight: 900;
        padding-bottom: 0.5rem;
    }

    p {
        margin-top: 0.5rem;
        font-size: 0.8rem;
        font-weight: 200;
    }

    .button-wrapper {
        display: flex;
        width: fit-content;
        height: fit-content;
    }

    .parameters button {
        width: 1.2rem;
        margin: 3px;
        height: 1.2rem;

        color: #0000;
        border: none;
    }

    .parameters button:hover {
        cursor: pointer;
    }
    
    .parameters {
        color: white;
        font-family: Lexend;
        font-weight: 300;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: black;

        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .active {
        background-color: red;
    }

    .not-active {
        background-color: white;
    }
    
    .parameters {
        .white {    background-color: white;    border: solid 2px rgb(110, 110, 110); }
        .red {      background-color: red;      border: solid 2px rgb(86, 34, 34); }
        .yellow {   background-color: yellow;   border: solid 2px rgb(159, 158, 72); }
        .black {    background-color: black;    border: solid 2px rgb(117, 117, 117); }
        .green {    background-color: #50eb0e;  border: solid 2px rgb(40, 108, 20); }
        .red-text { background-color: #330603;  border: solid 2px rgb(109, 24, 24); }
        .violet { background-color: #370a34;  border: solid 2px rgb(141, 21, 141); }
        .pink { background-color: #8f1365;  border: solid 2px rgb(227, 33, 201); }
        .blue { background-color: #11255b;  border: solid 2px rgb(104, 89, 236); }
        .light-blue { background-color: #4b79e6;  border: solid 2px rgb(111, 234, 253); }
        .orange { background-color: #ff9807;  border: solid 2px rgb(78, 53, 13); }
        .light-pink { background-color: #f64de2;  border: solid 2px rgb(78, 53, 13); }
        .dark-yellow { background-color: #443b15;  border: solid 2px rgb(121, 111, 32); }
        .dark-green { background-color: #092b10;  border: solid 2px rgb(52, 106, 62); }

        .small { border: 7px solid #000; }
        .medium { border: 5px solid #000; }
        .large { border: 2px solid #000; }
    }

</style>
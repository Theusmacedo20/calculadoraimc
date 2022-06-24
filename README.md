<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora IMC</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="oi">
    <header>
        <h1>Calculadora de IMC</h1>
    </header>
    <section>
        <div id="primeiro">
            <label for="">Peso:</label>
            <input type="number" name="alt" id="alt">
            <label for="">Altura:</label>
            <input type="number" name="pes" id="pes">
        </div>
        <div id="terceiro">
           <input class="but" type="button" value="Calcular" onclick="calcular()">
        </div>
        <div id="quarto">
            Seu IMC é:
        </div>
    </section>
    <footer>
            <p>&copy; Desenvolvido por Matheus Macedo</p>
    </footer>
    <script src="script2.js"></script>
</body>
</html>

var controllo1 = true;
var controllo2 = true;

//ESERCIZIO 1

function checkInputEs1 () {
    var input = document.getElementById("input").value;

    if(isNaN(input) || input % 1 != 0) {
        controllo1 = false;
        alert("Il numero inserito deve essere intero!");
    }
}

function calcoloEs1 () {
    if(controllo1) {
        console.log(document.getElementById("input").value)
        if(document.getElementById("input").value % 2 == 0) {
            document.getElementById("result").value = "0";
        }else {
            document.getElementById("result").value = "1";
        }
    }
}

//ESERCIZIO 2

function checkInputEs2 () {
    var input = document.getElementById("nascita").value;

    if(isNaN(input)) {
        alert("L'anno di nascita è sicuramente un numero...")
    }

    if(input > new Date.getFullYear()) {
        alert("L'anno di nascita non può essere maggiore dell'anno corrente...")
    }
}

$('#calcolo').on({
    click: function() {
        let nascita = $('#nascita').val();
        let currentYear = new Date().getFullYear();

        let age = currentYear*1 - nascita*1;
        let yearsto100 = 100 - age*1;


        $('#age').val(age);
        $('#yearsto100').val(yearsto100);
    }
})

//ESERCIZIO 3

$('#dataNascita').on({
    change: function() {
        let data = $('#dataNascita').val();
        const date = new Date(data);
        let currentData = new Date().getTime();

        if(date > currentData) {
            alert("errore! non puoi inserire una data di nascita che viene dopo il giorno corrente");
        }

    }
})

$('#calcoloDays').on({
    click: function() {
        let data = $('#dataNascita').val();
        const date = new Date(data);
        let currentData = new Date().getTime();

        let result = currentData*1 - date*1;

        let resultD = new Date(result);
        let giorni = Math.ceil(resultD/1000/60/60/24);

        console.log(date.getTime());
        console.log(currentData);

        $('#giorni').val(giorni);
    }
})

//ESERCIZIO 4

$('#numero1').on({
    change: function() {
        let number1 = $('#numero1').val();
        if(isNaN(number1)) {
            alert("errore! Si possono inserire solo numeri");
        }
    }
})

$('#numero2').on({
    change: function() {
        let number2 = $('#numero2').val();
        if(isNaN(number2)) {
            alert("errore! Si possono inserire solo numeri");
        }
    }
})

$('#numero3').on({
    change: function() {
        let number3 = $('#numero3').val();
        if(isNaN(number3)) {
            alert("errore! Si possono inserire solo numeri");
        }
    }
})

$('#calcoloMag').on({
    click: function() {
        let number1 = $('#numero1').val();
        let number2 = $('#numero2').val();
        let number3 = $('#numero3').val();

        let biggest;

        

        if(number1 > number2 && number1 > number3) {
            biggest = number1;
        }else if(number2 > number1 && number2 > number3) {
            biggest = number2;
        }else {
            biggest = number3;
        }
       
        $('#maggiore').val(biggest);
    }
})

$('#calcoloMin').on({
    click: function() {
        let number1 = $('#numero1').val();
        let number2 = $('#numero2').val();
        let number3 = $('#numero3').val();

        let lowest;

            if(number1 < number2 && number1 < number3) {
                lowest = number1;
            }else if(number2 < number1 && number2 < number3) {
                lowest = number2;
            }else {
                lowest = number3;
            }
       
        $('#minore').val(lowest);
    }
})

//ESERCIZIO 4 VARIANTE

$('#array').on({
    change: function() {
        let numbers = $('#array').val();

        if(numbers.includes(',') && numbers.split(',').length == 3) {
            var ok = true;
        }else {
            alert("errore formattazione array di numeri");
        }
    }
})

$('#calcoloMagA').on({
    click: function() {
        let numbers = $('#array').val();
    
        let biggest;

        let numeri = numbers.split(',');

        biggest = Math.max(...numeri);

        $('#maggioreA').val(biggest);
    }
})

$('#calcoloMinA').on({
    click: function() {
        let numbers = $('#array').val();

        let lowest;

        let numeri = numbers.split(',');

        lowest = Math.min(...numeri);
       
        $('#minoreA').val(lowest);
    }
})
//1
$("#input1").on({
    change : function() {
        let num = $(this).val();

        console.log(num);
        
        if(isNaN(num) || Number.isInteger(num) ){
			alert("valore immesso non accetabile, ritenta");
			$(this).val("");
			return;
		}
		else{
			let valore = parseInt(num);

            if(valore%2==0){
                $("#output1").val("0");
            }else{
                $("#output1").val("1");
            }
		}
    }
})

//2
let anno_corrente=-1;
let anno_nascita=-1;

$("#input2").on({
    change : function() {
        let anno = $(this).val();

        console.log(anno);
        
        if(isNaN(anno) || Number.isInteger(anno) || parseInt(anno) < 0 || anno_corrente<anno_nascita){
			alert("valore immesso non accetabile, ritenta");
			$(this).val("");
			return;
		}
		else{

            anno_corrente=parseInt(anno);

            if(anno_nascita>0){
                $("#output2").val(anno_corrente-anno_nascita);

                $("#output3").val(100-(anno_corrente-anno_nascita));
            }
		}
    }
})

$("#input3").on({
    change : function() {
        let anno = $(this).val();

        console.log(anno);
        
        if(isNaN(anno) || Number.isInteger(anno) || parseInt(anno) < 0 || anno_corrente<anno_nascita){
			alert("valore immesso non accetabile, ritenta");
			$(this).val("");
			return;
		}
		else{

            anno_nascita=parseInt(anno);

            if(anno_corrente>0){
                $("#output2").val(anno_corrente-anno_nascita);

                $("#output3").val(100-(anno_corrente-anno_nascita));
            }
		}
    }
})

//3
let giorni_odierni=null;
let giorni_nascita=null;

$("#input4").on({
    change : function() {
        let data = $(this).val();

        console.log(data);
        
        const dateValue = Date.parse(data); // converte la data in formato stringa in un timestamp in millisecondi
        const dateInt = parseInt(dateValue); // converte il timestamp in un numero intero

        let dateGiorni = dateInt/1000/60/60/24; //converte il numero intero inteso come millisecondi in giorni

        giorni_odierni=dateGiorni;

        if(giorni_nascita!=null){
            $("#output4").val(giorni_odierni-giorni_nascita);
        }
    }
})

$("#input5").on({
    change : function() {
        let data = $(this).val();

        console.log(data);
        
        const dateValue = Date.parse(data); // converte la data in formato stringa in un timestamp in millisecondi
        const dateInt = parseInt(dateValue); // converte il timestamp in un numero intero

        let dateGiorni = dateInt/1000/60/60/24; //converte il numero intero inteso come millisecondi in giorni

        giorni_nascita=dateGiorni;

        if(giorni_odierni != null){
            $("#output4").val(giorni_odierni-giorni_nascita);
        }
    }
})

//4
$("#input6").on({
    change : function() {
        let input = $(this).val();

        console.log(input);
        
        let regex = /^[0-9,]+$/;

        if(!regex.test(input)){
            alert("valori non ammissibili, riprova");
            $(this).val("");
			return;
        }
        else{
            let numbers = input.split(","); // splitta la stringa usando "," come separator e restituisce un array di stringhe

            if(numbers.length!=3){
                alert("non hai inserito 3 numeri, riprova");
                console.log(numbers.length);
                $(this).val("");
			    return;
            }

            let interi = Array();

            for(let i=0; i<3; i++){
                interi.push(parseInt(numbers[i]));
            }

            $("#output5").val(Math.max(...interi));
            $("#output6").val(Math.min(...interi));
        }
        
    }
})
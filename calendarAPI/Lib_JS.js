//Funzione per Esercizio 1
function isPari(){
    var input=document.getElementById("n1").value;
    if(isNaN(input) || parseInt(input)<0){
        alert("Devi inserire un valore numerico (possibilmente maggiore di 0)!");
    }else{
        var output=1;
        if(input%2==0){
            output=0;
        }
        var o=document.getElementById("o1");
        o.value=output;
    }
};

//Funzione per Esercizio 2
function calcolaAnni(){
    var ac=document.getElementById("ac").value;
    if(isNaN(ac) || parseInt(ac)<0){
        alert("Il valore inserito deve essere un numero (anche maggiore di zero). Riprova.");
    }else{
        var an=document.getElementById("an").value;
        if(isNaN(an) || parseInt(an)<0){
            alert("Il valore inserito deve essere un numero (anche maggiore di zero). Riprova.");
        }else{
            //Calcolo anni attuali della persona
            var aat=eval(ac-an);

            //Calcolo quanti anni mancano ai 100
            var a100=eval(100-aat);

            var o1=document.getElementById("o2");
            var o2=document.getElementById("o3");

            o1.value=aat;
            o2.value=a100;
        }
    }
};

//Funzione per Esercizio 3
function calcolaGiorni(){
    var dateA=document.getElementById("today").value;
    const today=new Date(dateA);
    console.log(today);
    var dateB=document.getElementById("birth").value;
    const birth=new Date(dateB);
    if(today.getTime()<birth.getTime()){
        alert("La data di nascita inserita non è valida.");
    }else{
        let difference=today.getTime()-birth.getTime();
        var output=document.getElementById("tot");
        output.value=difference/(1000 * 60 * 60 * 24);
    }
};

//Funzione per Esercizio 4
function calcolaMinMax(){
    var a=document.getElementById("a");
    var b=document.getElementById("b");
    var c=document.getElementById("c");
    var min, max, med;
    if(isNaN(a.value) || parseInt(a.value)<0 || isNaN(b.value) || parseInt(b.value)<0 || isNaN(c.value) || parseInt(c.value)<0){
        alert("Uno dei valori inseriti non è valida. Riprova.");
    }else{
        var A=parseInt(a.value);
        var B=parseInt(b.value);
        var C=parseInt(c.value);

        if(A>B){max=A;min=B;}
        else {max=B;min=A;}

        if(C>max){med=max;max=C;}
        else if(C<min){med=min;min=C;}
        else {med=C;}

        var m=document.getElementById("min");
        var M=document.getElementById("max");
        m.value=min;
        M.value=max;
    }
};
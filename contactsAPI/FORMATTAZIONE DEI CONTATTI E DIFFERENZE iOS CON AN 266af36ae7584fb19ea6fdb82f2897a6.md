# FORMATTAZIONE DEI CONTATTI E  DIFFERENZE iOS CON ANDROID

|  | ANDROID | iOS |
| --- | --- | --- |
| BEGIN: | VCARD | VCARD |
| VERSION: | {versione} | {versione} |
| PRODID: | non esiste | -//Apple Inc.//iOS 7.1//EN |
| N: | ;{nome};;; | ;{nome};;; |
| FN: | {nome} | {nome} |
| TEL | ;type=CELL;type=VOICE;type=pref:{+39 366 115 9393} | ;CELL:{+39 328 091 4957} |
| REV: | non esiste | {2015-09-11T10:22:43Z} |
| END: | VCARD | VCARD |

IDEA:

1. Mandare il file .vcf al back-end:
    1. pulsante front-end per caricare il file.
2. Controllo del file per determinare la provenienza se apple o android:
    1. PRODID → apple
    2. TEL → differente formattazione
    3. REV → apple
3. Lettura in back-end del file e salvataggio dei campi in variabili:
    1. controllare la formattazione diversa dei vari campi per i 2 dispositivi
4. Caricamento delle variabili del contatto sul database condiviso.

L’idea della lettura da file può essere così strutturata:

1. Si legge tutto il file → noi sappiamo che ogni riga del file .vcf è effettivamente un campo del contatto in questione
2. Si recupera il nome del campo considerando la prima parola di ogni riga (escluse la prima e l’ultima che sono rispettivamente `BEGIN:VCARD` e `END:VCARD`), considerando o il separatore “:” oppure “;”
3. Il valore del campo è quello che c’è immediatamente dopo il nome del campo.

Sia per Android che per Apple la formattazione è uguale, l’unica cosa che cambia è il come vengono scritti i valori dentro i campi. La distinzione tra Apple e Android viene fatta a priori, non appena viene caricato il documento .vcf e poi si lavora di conseguenza. La questione che ogni campo può avere un sottocampi è facilmente risolvibile in quanto tutti i sottocampi di un determinato campo si trovano sulla stessa riga, quindi utilizzando i separatori è facile risalire ai valori di ogni campo presente sulla scheda contatto. Apple ha in più che ogni sottocampo/campo ha il “type” che ci dice che tipo di email o numero di telefono è, come per esempio casa o lavoro.
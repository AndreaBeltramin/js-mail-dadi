//!Mail
//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.

//Prima di partire a scrivere codice poniamoci qualche domanda:
//Che ci sia un array da qualche parte?
//Se dobbiamo confrontare qualcosa che "cosa" ci serve?

//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//3. si ma noi cosa vogliamo fare?
//4. torniamo a scrivere in italiano
//5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//!RACCOLTA DATI
//Creo un array di mail e stampo
const mail = [
	"andrea@gmail.com",
	"simone@gmail.com",
	"luca@gmail.com",
	"giacomo@libero.it",
	"sofia@libero.it",
	"lucia@libero.it",
];

console.log(mail);

//Chiedo di scrivere la sua mail
const userMail = prompt("Inserisci la tua mail");
console.log("Hai inserito " + userMail);

//!ELABORAZIONE E OUTPUT
//Controllo se la mail scritta è valida, cioè se ha una @ e un .
//Stampo messaggio con esito del controllo

const isUserMailValid = userMail.includes("@") && userMail.includes(".");

if (!isUserMailValid) {
	console.log("La mail inserita non è valida. Riprova");
	alert("La mail inserita non è valida. Riprova");
} else {
	console.log("La mail inserita è valida.");
	alert("La mail inserita è valida.");

	//La mail è valida quindi :
	//Controllo se la mail scritta è presente nell'array di mail
	//Stampo messaggio con esito del controllo

	const isUserMailPresent = mail.includes(userMail);
	if (isUserMailPresent) {
		console.log("La mail inserita è presente, puoi accedere");
		alert("La mail inserita è presente, puoi accedere");
	} else {
		console.log("La mail inserita NON è presente, NON puoi accedere");
		alert("La mail inserita NON  è presente, NON puoi accedere");
	}
}

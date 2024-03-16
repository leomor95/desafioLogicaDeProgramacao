let win = 30
let loss = 10
let balance = getBalance(win,loss)
let level = getLevel(balance)

function getBalance(w,l){
	let balance = w - l
    return balance
}

function getLevel(b){
	if(b<=10){
		value = "Ferro"
	} else if((b>10)&&(balance<=20)){
		value = "Bronze"
	} else if((b>20)&&(balance<=50)){
		value = "Prata"
	} else if((b>50)&&(balance<=80)){
		value = "Ouro"
	} else if((b>80)&&(balance<=90)){
		value = "Diamante"
	} else if((b>90)&&(balance<=100)){
		value = "Lendário"
	} else{
		value = "Imortal"
	}
    return value
}  

console.log("O Herói tem de saldo de " + balance + " está no nível de " + level)

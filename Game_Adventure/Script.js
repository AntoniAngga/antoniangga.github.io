/**
 * Created by antoniangga on 4/14/17.
 */

var warriorImage = document.getElementById("Warrior");
var archerImage = document.getElementById("Archer");
var mageImage = document.getElementById("Mage");
var Nama = document.getElementById("txtName");
var AttackMonsterText = document.getElementById("log-Pertarungan");
var KeteranganHero = document.getElementById("Keterangan-Hero");
var buttonReset = document.createElement("button");
var buttonText = document.createTextNode("Reset");

warriorImage.addEventListener('click',function () {
    if(Nama.value == ""){
        alert("Name Must Be Filled");
    }
    else{
        Warrior(Nama.value);
    }
});

archerImage.addEventListener('click',function () {
    if(Nama.value == ""){
        alert("Name Must Be Filled");
    }
    else{
        Archer(Nama.value);
    }
});

mageImage.addEventListener('click', function () {
    if(Nama.value == ""){
        alert("Name Must Be Filled");
    }
    else{
        Mage(Nama.value);
    }
});



function Mage(){
    var hpHero = 3500;
    var sisaHpMonster = 0;
    var hpMonster = MonsterRandomHP(1000,6000);

    var h5HeroHp = document.createElement('h5');
    var h5TextHeroHp = document.createTextNode(name+" Hero HP "+hpHero);
    h5HeroHp.appendChild(h5TextHeroHp);
    KeteranganHero.appendChild(h5HeroHp);

    var h5MonsterHp = document.createElement('h5');
    var h5TextMonsterHp = document.createTextNode("Monster Hp "+hpMonster);
    h5MonsterHp.appendChild(h5TextMonsterHp);
    KeteranganHero.appendChild(h5MonsterHp);

    for(var i = 0; i <= sisaHpMonster; i++){
        sisaHpMonster = hpMonster-=HeroAttack(400,800);
        if(sisaHpMonster<=0){
            sisaHpMonster = 0;
        }

        var li = document.createElement('li');
        var liText = document.createTextNode("You Attack to Monster, Monster Hp "+sisaHpMonster);
        li.appendChild(liText);
        AttackMonsterText.appendChild(li);
    }

    sisaHpHero = hpHero - MonsterRandomAttack(i * 200, i*700);
    if (sisaHpHero <= 0) {
        //You Lose and Next Monster Will Coming
        sisaHpHero = 0;
        var h3Lose = document.createElement("h3");
        var h3TextLose = document.createTextNode("You Lose !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Lose.appendChild(h3TextLose);
        FinishDesc.appendChild(h3Lose);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);
    }
    else{
        var h3Win = document.createElement("h3");
        var h3TextWin = document.createTextNode("You Win !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Win.appendChild(h3TextWin);
        FinishDesc.appendChild(h3Win);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);

    }

    var Reset = document.getElementById('Reset-btn');
    Reset.addEventListener('click',function (){
        location.reload();
    })
}

function Archer(){

    var hpHero = 3000;
    var sisaHpMonster = 0;
    var hpMonster = MonsterRandomHP(1000,6000);

    var h5HeroHp = document.createElement('h5');
    var h5TextHeroHp = document.createTextNode(name+" Hero HP "+hpHero);
    h5HeroHp.appendChild(h5TextHeroHp);
    KeteranganHero.appendChild(h5HeroHp);

    var h5MonsterHp = document.createElement('h5');
    var h5TextMonsterHp = document.createTextNode("Monster Hp "+hpMonster);
    h5MonsterHp.appendChild(h5TextMonsterHp);
    KeteranganHero.appendChild(h5MonsterHp);

    for(var i = 0; i <= sisaHpMonster; i++){
        sisaHpMonster = hpMonster-=HeroAttack(400,1000);
        if(sisaHpMonster<=0){
            sisaHpMonster = 0;
        }

        var li = document.createElement('li');
        var liText = document.createTextNode("You Attack to Monster, Monster Hp "+sisaHpMonster);
        li.appendChild(liText);
        AttackMonsterText.appendChild(li);
    }

    sisaHpHero = hpHero - MonsterRandomAttack(i * 200, i*800);
    if (sisaHpHero <= 0) {
        //You Lose and Next Monster Will Coming
        sisaHpHero = 0;
        var h3Lose = document.createElement("h3");
        var h3TextLose = document.createTextNode("You Lose !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Lose.appendChild(h3TextLose);
        FinishDesc.appendChild(h3Lose);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);
    }
    else{
        var h3Win = document.createElement("h3");
        var h3TextWin = document.createTextNode("You Win !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Win.appendChild(h3TextWin);
        FinishDesc.appendChild(h3Win);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);

    }

    var Reset = document.getElementById('Reset-btn');
    Reset.addEventListener('click',function (){
        location.reload();
    })
}

function Warrior(name){
    var hpHero = 7000;
    var sisaHpMonster = 0;
    var hpMonster = MonsterRandomHP(1000,6000);

    var h5HeroHp = document.createElement('h5');
    var h5TextHeroHp = document.createTextNode(name+" Hero HP "+hpHero);
    h5HeroHp.appendChild(h5TextHeroHp);
    KeteranganHero.appendChild(h5HeroHp);

    var h5MonsterHp = document.createElement('h5');
    var h5TextMonsterHp = document.createTextNode("Monster Hp "+hpMonster);
    h5MonsterHp.appendChild(h5TextMonsterHp);
    KeteranganHero.appendChild(h5MonsterHp);

    for(var i = 0; i <= sisaHpMonster; i++){
        sisaHpMonster = hpMonster-=HeroAttack(300,600);
        if(sisaHpMonster<=0){
            sisaHpMonster = 0;
        }

        var li = document.createElement('li');
        var liText = document.createTextNode("You Attack to Monster, Monster Hp "+sisaHpMonster);
        li.appendChild(liText);
        AttackMonsterText.appendChild(li);
    }

    sisaHpHero = hpHero - MonsterRandomAttack(i * 200, i*1000);
    if (sisaHpHero <= 0) {
        //You Lose and Next Monster Will Coming
        sisaHpHero = 0;
        var h3Lose = document.createElement("h3");
        var h3TextLose = document.createTextNode("You Lose !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Lose.appendChild(h3TextLose);
        FinishDesc.appendChild(h3Lose);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);
    }
    else{
        var h3Win = document.createElement("h3");
        var h3TextWin = document.createTextNode("You Win !, Your Hp : "+sisaHpHero);
        var FinishDesc = document.getElementById("FinishDescription");
        h3Win.appendChild(h3TextWin);
        FinishDesc.appendChild(h3Win);

        buttonReset.setAttribute('id','Reset-btn');
        buttonReset.appendChild(buttonText);
        FinishDesc.appendChild(buttonReset);

    }

    var Reset = document.getElementById('Reset-btn');
    Reset.addEventListener('click',function (){
        location.reload();
    })

}





function MonsterRandomHP(min,max) {
    var HpMonster =  Math.floor(Math.random() * (max - min + 1)) + min;
    return HpMonster;
}

function MonsterRandomAttack(min,max) {
    var AttackMonster =  Math.floor(Math.random() * (max - min + 1)) + min;

    return AttackMonster;
}

function HeroAttack(min, max){
    var HeroAttack = Math.floor(Math.random() * (max - min + 1)) + min;

    return HeroAttack;
}
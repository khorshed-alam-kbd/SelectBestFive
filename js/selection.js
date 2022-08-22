// selected player for best five

document.getElementById('select-mashrafe').addEventListener("click", function () {
    const newList = document.createElement("li");
    const newListText = document.createTextNode("Mashrafe Bin Mortaza ");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-mashrafe').disabled = true;

});
document.getElementById('select-shakib').addEventListener("click", function () {
    const newList = document.createElement("li");
    const newListText = document.createTextNode("Shakib Al Hasan ");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-shakib').disabled = true;
});

document.getElementById('select-Mushfiqur').addEventListener("click", function () {

    const newList = document.createElement("li");
    const newListText = document.createTextNode("Mushfiqur Rahim");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-Mushfiqur').disabled = true;
});

document.getElementById('select-Mahmudullah').addEventListener("click", function () {

    const newList = document.createElement("li");
    const newListText = document.createTextNode("Mahmudullah Riyad");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-Mahmudullah').disabled = true;
});
document.getElementById('select-tamim').addEventListener("click", function () {
    const newList = document.createElement("li");
    const newListText = document.createTextNode("Tamim Iqbal ");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-tamim').disabled = true;

});
document.getElementById('select-mustafiz').addEventListener("click", function () {
    const newList = document.createElement("li");
    const newListText = document.createTextNode("Mustafizur Rahman");
    newList.appendChild(newListText);
    const playerList = document.getElementById('player-list');
    playerList.appendChild(newList);
    document.getElementById('select-mustafiz').disabled = true;
});


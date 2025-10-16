
//car
let carArr = [];

class Car {


    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, image) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo;
        this.capacidadecarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumecacamba = volumecacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].modelo === carClass.modelo)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass);


        } else {
            const index = GetCarArrPosition(carArr, carClass);
            carArr.splice(index, 1)
        }
    } else {
        const index = GetCarArrPosition(carArr, carClass);
        if (index !== -1) {
            carArr.splice(index, 1);
        }
    }
}



function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    if(carArr.length > 2) {
        alert("Pode marcar apenas 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    const campos = ['modelo', 'preco', 'alturacacamba', 'alturaveiculo', 'alturasolo', 'capacidadecarga', 'motor', 'potencia', 'volumecacamba', 'roda', 'image'];




    console.log("Atualizando tabela com:", carArr);

    for (let i = 0; i < 2; i++) {
        if (carArr[i]) {
            campos.forEach(campo => {
                const id = `compare_${campo}_${i}`;
                const value = carArr[i][campo];

                console.log(campo, value, id);

                if (campo === 'image') {
                    document.getElementById(id).innerHTML = `<img src="${value}" width="150">`;
                } else if (campo === 'preco') {
                    document.getElementById(id).innerHTML = `R$ ${value.toLocaleString('pt-BR')}`;
                } else {
                    document.getElementById(id).innerHTML = value;
                }
            });
        } else {
            // limpa as colunas vazias, caso só tenha um carro
            campos.forEach(campo => {
                const id = `compare_${campo}_${i}`;
                document.getElementById(id).innerHTML = '';
            });
        }
    }


}
function Habitation(adresse) {
    this.adresse = adresse;
    this.bal = {
        courriers: [],
        deposerCourrier: function (courrier) {
            this.courriers.push(courrier);
        },
        retirerCourrier: function () {
            this.courriers = [];
        }
    }
}
maison1 = new Habitation("Chemin des développeurs");
maison2 = new Habitation("Route de St go");
maison3 = new Habitation("Route du comminges");

function Mail(dest, msg) {
    this.destination = dest;
    this.message = msg;
}

courrier1 = new Mail("Route de St go", "Salut, ça va?");
courrier2 = new Mail("Chemin des développeurs", "Facture edf");
courrier3 = new Mail("Route du comminges", "Vous étes millionaire");

let saccoche = [];

saccoche.push(courrier1);
saccoche.push(courrier2);
saccoche.push(courrier3);


for (i = 0; i <= saccoche.length -1; i++) {
    if (saccoche[i].destination == maison1.adresse) {
        maison1.bal.deposerCourrier(saccoche[i]);
        delete saccoche[i];
        
    } else if (saccoche[i].destination == maison2.adresse) {
        maison2.bal.deposerCourrier(saccoche[i]);
        delete saccoche[i];

    } else if (saccoche[i].destination == maison3.adresse) {
        maison3.bal.deposerCourrier(saccoche[i]);
        delete saccoche[i];
    }
}

console.log(maison1.bal.courriers)


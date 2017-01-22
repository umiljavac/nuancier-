var Nuancier = {
    initNuance: function (carre, rouge, vert, bleu, parent) {
        this.carre = carre;
        this.rouge = rouge;
        this.vert = vert;
        this.bleu = bleu;
        this.parent = parent;
        var divParent = document.getElementById(this.parent);
        divParent.className = "nuancier";
        for (var i = 0; i < 9; i++) {
            var couleurAlpha = document.createElement("div");
            couleurAlpha.className = "couleur";
            couleurAlpha.style.backgroundColor = "rgba(" + this.rouge + ", " + this.vert + ", " + this.bleu + ", 0." + i + 1 + ")";
            couleurAlpha.style.width = this.carre + "px";
            couleurAlpha.style.height = this.carre + "px";
            divParent.appendChild(couleurAlpha);

        }
        var couleur = document.createElement("div");
        couleur.style.backgroundColor = "rgba(" + this.rouge + ", " + this.vert + ", " + this.bleu + ", 1)";
        couleur.style.width = this.carre + "px";
        couleur.style.height = this.carre + "px";
        couleur.className = "couleur";
        divParent.appendChild(couleur);

    }
};
for (var b = 0; b <= 255; b += 51) {
    for (var g = 0; g <= 255; g += 51) {
        for (var r = 0; r <= 255; r += 51) {
            var nuancierNoir = Object.create(Nuancier);
            nuancierNoir.initNuance(55, r, g, b, "nuancierNoir");
            var nuancierBlanc = Object.create(Nuancier);
            nuancierBlanc.initNuance(55, r, g, b, "nuancierBlanc");
        }
    }
}

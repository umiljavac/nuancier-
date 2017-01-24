var Nuancier = {
    initNuance: function (rouge, vert, bleu, parent) {
        this.rouge = rouge;
        this.vert = vert;
        this.bleu = bleu;
        this.parent = parent;
        var divParent = document.getElementById(this.parent);
        divParent.className = "nuancier";
        for (var i = 1; i <= 10; i++) {
            var couleurAlpha = document.createElement("div");
            couleurAlpha.className = "couleur";
            couleurAlpha.style.backgroundColor = "rgba(" + this.rouge + ", " + this.vert + ", " + this.bleu + ", 0." + i + ")";     
            if (i === 10) {
                couleurAlpha.style.backgroundColor = "rgba(" + this.rouge + ", " + this.vert + ", " + this.bleu + ", 1)";
            }
              divParent.appendChild(couleurAlpha);
              couleurAlpha.addEvenlistener("click", function() {
                var couleurCellule = getComputedStyle(couleurAlpha).backgroundColor;
                console.log(couleurCellule); 
              });
        }
    }
};
for (var b = 0; b <= 255; b += 51) {
    for (var g = 0; g <= 255; g += 51) {
        for (var r = 0; r <= 255; r += 51) {
            var nuancierNoir = Object.create(Nuancier);
            nuancierNoir.initNuance(r, g, b, "nuancierNoir");
            var nuancierBlanc = Object.create(Nuancier);
            nuancierBlanc.initNuance(r, g, b, "nuancierBlanc");
        }
    }
}

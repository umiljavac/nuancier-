var Nuancier = {
    initNuance: function (rouge, vert, bleu, parent, alpha) {
        this.rouge = rouge;
        this.vert = vert;
        this.bleu = bleu;
        this.parent = parent;
        this.alpha = alpha;
        var divParent = document.getElementById(this.parent);
        divParent.className = "nuancier";
       
            var couleurAlpha = document.createElement("div");
            couleurAlpha.className = "couleur";           
            couleurAlpha.style.backgroundColor = "rgba(" + this.rouge + ", " + this.vert + ", " + this.bleu + ", " + this.alpha + ")";     
            couleurAlpha.addEventListener("click", function() {
            var couleurCellule = getComputedStyle(couleurAlpha).backgroundColor;
            console.log(couleurCellule); 
            });
            divParent.appendChild(couleurAlpha);
        } 
};
for (var b = 0; b <= 255; b += 51) {
    for (var g = 0; g <= 255; g += 51) {
        for (var r = 0; r <= 255; r += 51) {
            for (var a = 0.1; a <= 1; a += 0.1) {
            var nuancierNoir = Object.create(Nuancier);
            nuancierNoir.initNuance(r, g, b, "nuancierNoir", a);
            var nuancierBlanc = Object.create(Nuancier);
            nuancierBlanc.initNuance(r, g, b, "nuancierBlanc", a);
            }
        }
    }
}

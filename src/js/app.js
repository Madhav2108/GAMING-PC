//  𝑀𝑎𝑑𝒉𝑎𝑣 𝑛𝑎𝑟𝑎𝑦𝑎𝑛: 
// ★彡 RiFtVulture 彡★
// ✏ 𝑂𝑛 𝑟𝑜𝑎𝑑 𝑜𝑓 𝑔𝑒𝑒𝑘 𝑡𝑜 𝑑𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟 
// ✏ 𝑎𝑙𝑤𝑎𝑦𝑠 𝑙𝑒𝑎𝑟𝑛𝑖𝑛𝑔
// ✏ ɯσɾƙιɳɠ σɳ Fυʅʅ ʂƚαƈƙ
// ✏  || Pɾσԃυƈƚ ɱαɾƙҽƚιɳɠ ||
// COntact For Make Projects


$(window).mousemove(function(e) { 	  
    $(".cursor").css({
        left: e.pageX,
        top: e.pageY
    })	  
})
$(".cursor-link")
.on("mouseenter", function() {	 
$('.cursor').addClass("active")	  
})
.on("mouseleave", function() {	  
$('.cursor').removeClass("active")	  
})		
document.getElementById("shareBtn")?.addEventListener("click", async () => {
  const data = {
    title: "Abdo Elamir – Dubai",
    text: "Luxury car protection – Dubai Branch",
    url: window.location.href
  };
  if (navigator.share) navigator.share(data);
});

document.getElementById("saveBtn")?.addEventListener("click", () => {
  const vcf =
`BEGIN:VCARD
VERSION:3.0
FN:ABDO ELAMIR DUBAI
ORG:Abdo Elamir
TEL:+971XXXXXXXXX
END:VCARD`;
  const blob = new Blob([vcf],{type:"text/vcard"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="AbdoElamirDubai.vcf";
  a.click();
});

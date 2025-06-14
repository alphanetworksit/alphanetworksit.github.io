document.addEventListener("DOMContentLoaded", function () {
    // Get the PC name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const pcName = urlParams.get("pc");

    // Display recommendation
    document.getElementById("pcName").textContent = pcName;

    const descriptions = {
        "Budget Gaming PC": "An affordable gaming PC that can handle popular esports titles at 1080p.",
        "Mid-Range Gaming PC": "A solid gaming rig for 1080p and 1440p gaming with high settings.",
        "High-End Gaming PC": "A top-tier gaming PC capable of 4K gaming and VR.",
        "Budget Office PC": "A simple and efficient office PC for productivity and web browsing.",
        "Mid-Range Design Workstation": "A workstation optimized for graphic design and video editing.",
        "High-End Design Workstation": "A powerful PC for professional 3D modeling and 4K video editing."
    };

    document.getElementById("pcDescription").textContent = descriptions[pcName] || "Explore our shop for more options!";
});

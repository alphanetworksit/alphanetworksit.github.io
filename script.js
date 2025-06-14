document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quizForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get selected values
        let usage = document.querySelector('input[name="usage"]:checked');
        let budget = document.querySelector('input[name="budget"]:checked');
        let build = document.querySelector('input[name="build"]:checked');

        if (!usage || !budget || !build) {
            alert("Please answer all questions.");
            return;
        }

        // Convert selections to values
        usage = usage.value;
        budget = budget.value;
        build = build.value;

        // Decision logic
        let pcChoice = "Budget Office PC"; // Default option

        if (usage === "gaming") {
            if (budget === "low") {
                pcChoice = "Budget Gaming PC";
            } else if (budget === "mid") {
                pcChoice = "Mid-Range Gaming PC";
            } else {
                pcChoice = "High-End Gaming PC";
            }
        } else if (usage === "design") {
            if (budget === "low") {
                pcChoice = "Budget Design Workstation";
            } else if (budget === "mid") {
                pcChoice = "Mid-Range Design Workstation";
            } else {
                pcChoice = "High-End Design Workstation";
            }
            
        }
        

        // Redirect to results page with PC choice
        window.location.href = "results.html?pc=" + encodeURIComponent(pcChoice);
        function filterPCs() {
            let searchValue = document.getElementById("searchBox").value.toLowerCase();
            let shopContainer = document.getElementById("shop-items");
            shopContainer.innerHTML = ""; // Clear existing PCs
        
            let found = false; // Track if any PCs match
        
            pcs.forEach((pc, index) => {
                if (pc.name.toLowerCase().includes(searchValue) || pc.specs.toLowerCase().includes(searchValue)) {
                    shopContainer.innerHTML += `
                        <div class="pc-card">
                            <img src="${pc.image}" alt="${pc.name}">
                            <h3>${pc.name}</h3>
                            <p>${pc.specs}</p>
                            <strong>$${pc.price}</strong>
                            <button onclick="addToCart(${index})">Add to Cart</button>
                        </div>
                    `;
                    found = true;
                }
            });
        
            // Show "No results found" message if nothing matches
            if (!found) {
                shopContainer.innerHTML = `<p style="text-align: center; font-size: 18px; color: red;">No results found</p>`;
            }
        }
        
        }  
      
    });

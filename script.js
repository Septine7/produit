
        let products = [];

        function addProduct() {
            const name = document.getElementById('productName').value;
            const price = document.getElementById('productPrice').value;

            if (name && price) {
                const product = {
                    id: Date.now(),
                    name: name,
                    price: parseFloat(price)
                };
                products.push(product);
                renderProducts();
                document.getElementById('productName').value = '';
                document.getElementById('productPrice').value = '';
            } else {
                alert("Veuillez entrer un nom et un prix pour le produit.");
            }
        }

        function editProduct(id) {
            const newName = prompt("Entrez le nouveau nom du produit:");
            const newPrice = prompt("Entrez le nouveau prix du produit:");

            if (newName && newPrice) {
                const product = products.find(p => p.id === id);
                if (product) {
                    product.name = newName;
                    product.price = parseFloat(newPrice);
                    renderProducts();
                }
            }
        }

        function deleteProduct(id) {
            products = products.filter(p => p.id !== id);
            renderProducts();
        }

        function renderProducts() {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';

            products.forEach(product => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.textContent = `${product.name} - ${product.price.toFixed(2)}Fr`;

                const buttonGroup = document.createElement('div');

                const editButton = document.createElement('button');
                editButton.className = 'btn btn-sm btn-warning mr-2';
                editButton.textContent = 'Modifier';
                editButton.onclick = () => editProduct(product.id);

                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn btn-sm btn-danger';
                deleteButton.textContent = 'Supprimer';
                deleteButton.onclick = () => deleteProduct(product.id);

                buttonGroup.appendChild(editButton);
                buttonGroup.appendChild(deleteButton);
                
                li.appendChild(buttonGroup);

                productList.appendChild(li);
            });
        }
    
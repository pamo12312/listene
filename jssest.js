
    const listItems = document.querySelectorAll('.draggable-item');

    let draggedItem = null;

    listItems.forEach(item => {
        item.addEventListener('dragstart', function() {
            draggedItem = this;
            setTimeout(() => this.style.display = 'none', 0);
        });

        item.addEventListener('dragend', function() {
            setTimeout(() => {
                this.style.display = 'block';
                draggedItem = null;
            }, 0);
        });

        item.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        item.addEventListener('drop', function(e) {
            e.preventDefault();
            if (this !== draggedItem) {
                let allItems = document.querySelectorAll('.draggable-item');
                let thisPos = Array.from(allItems).indexOf(this);
                let draggedPos = Array.from(allItems).indexOf(draggedItem);

                if (thisPos < draggedPos) {
                    this.parentNode.insertBefore(draggedItem, this);
                } else {
                    this.parentNode.insertBefore(draggedItem, this.nextSibling);
                }
            }
        });
    });

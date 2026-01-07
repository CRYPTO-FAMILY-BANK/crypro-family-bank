document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filter-item');
    const folders = document.querySelectorAll('.black-folder');

    function applyFilter(filter) {
        folders.forEach(folder => {
            const categories = folder.getAttribute('data-category');

            if (filter === 'all') {
                folder.style.display = 'block';
                return;
            }

            if (categories && categories.split(' ').includes(filter)) {
                folder.style.display = 'block';
            } else {
                folder.style.display = 'none';
            }
        });
    }

    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            filterItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    applyFilter('all');
});
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const projectLinks = document.querySelectorAll('.vivod > a');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            filterItems.forEach(i => i.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');

            const filter = item.dataset.filter;

            projectLinks.forEach(link => {
                const categories = link.dataset.category.split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    link.style.display = ''; // default display for grid item
                } else {
                    link.style.display = 'none';
                }
            });
        });
    });
});
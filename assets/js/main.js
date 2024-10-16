function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (dropdownMenu.classList.contains('visible')) {
        dropdownMenu.classList.remove('visible');
        dropdownToggle.classList.remove('rotated');
    } else {
        dropdownMenu.classList.add('visible');
        dropdownToggle.classList.add('rotated');
    }
}

function selectOption(element) {
    const selectedOption = document.querySelector('.selected-option');

    // Remove 'active' class from all options
    document.querySelectorAll('.dropdown-menu li').forEach(li => {
        li.classList.remove('active');
    });

    // Add 'active' class to the selected option
    element.classList.add('active');

    // Update the selected option text
    selectedOption.textContent = element.textContent;

    // Close the dropdown
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    dropdownMenu.classList.remove('visible');
    dropdownToggle.classList.remove('rotated');
}

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('#sort');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('visible');
        dropdownToggle.classList.remove('rotated');
    }
});
function toggleAlert() {
    const isChecked = document.getElementById('toggle').checked;
  }


//   mobile menu
document.getElementById("profile-menu-toggler").addEventListener("click", function() {
    document.getElementById("mobile-main-menu").style.right = "0";
    document.getElementById("transparent-layout").style.right = "-0";
});

document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobile-main-menu");
    const toggler = document.getElementById("profile-menu-toggler");

    if (!menu.contains(event.target) && !toggler.contains(event.target)) {
        menu.style.right = "-80%";
        document.getElementById("transparent-layout").style.right = "-100%";
    }
});;

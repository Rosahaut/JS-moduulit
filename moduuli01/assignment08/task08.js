'use strict';

    const startYear = parseInt(prompt('Enter the start year:'));
    const endYear = parseInt(prompt('Enter the end year:'));

    const leapYears = [];

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    let html = '<ul>\n';
    leapYears.forEach(year => {
        html += `<li>${year}</li>\n`;
    });
    html += '</ul>';

    document.querySelector('#target').innerHTML = html;
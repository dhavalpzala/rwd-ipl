import data from './data.json';

data.forEach(({ id, teamName, logo, winningYears }) => {
    const template  = document.getElementById('team-template').content.cloneNode(true);
    template.querySelector('[data-id="team"]').classList.add(id);
    template.querySelector('[data-id="name"]').innerText = teamName;
    template.querySelector('[data-id="logo"]').src = logo;

    if(winningYears.length > 0) {
        template.querySelector('[data-id="winning-years"]').innerText = " " + winningYears.join(', ');
    } else {
        template.querySelector('[data-id="winning-years-container"]').style.display = "none";
    }

    document.getElementById('teams-list').append(template);
})
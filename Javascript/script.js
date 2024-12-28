// JavaScript - script.js

// Function to display the modal with element details
function showDetails(symbol, name, number, atomicNumber, description, group, period, block, meltingPoint, boilingPoint, density, atomicMass, state, isotopes, electronConfig, casNumber, history) {
    // Store the element details in localStorage
    localStorage.setItem('elementDetails', JSON.stringify({
        symbol: symbol,
        name: name,
        number: number,
        atomicNumber: atomicNumber,
        description: description,
        group: group,
        period: period,
        block: block,
        meltingPoint: meltingPoint,
        boilingPoint: boilingPoint,
        density: density,
        atomicMass: atomicMass,
        state: state,
        isotopes: isotopes,
        electronConfig: electronConfig,
        casNumber: casNumber,
        history: history
    }));

    // Redirect to the elementDetails.html page
    window.location.href = 'elementDetails.html';
}

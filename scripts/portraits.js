/*
 *
 *@param {string} willShowInfo
 *  -Name of element that will display portrait information. As user hovers
 *  over portrait, this element's first child will be the portrait information
 *  that is displayed.
 *@param {string} portraitClass
 *  -Name of class of elements that will contain portaits' information. Each
 *  element in this class will correspond to one portait's information.
 *@returns {}
 */
function managePortraits(listeningElements, eventName, 
                         listeningElementsRelatedInfo, firstShownElement, 
                         willShowInfo) {

    // add event handlers to listeningElements elements. put the related
    // information elements into returned object, where each related
    // info element is referenced by the id of the corresponding listening
    // element. each related information element is removed from the dom in
    // the process
    var getRelatedInfo = 
    function() {
        var elementsDict = {};
        var elements =  document.getElementsByClassName(listeningElements);
        for (var i=0; i < elements.length; i++) {
            elements[i].addEventListener(eventName, listenerHandler);
            elementIDName = elements[i].id;
            parentElement = elements[i].parentElement;
            relatedInfo = 
            parentElement.getElementsByClassName(listeningElementsRelatedInfo)[0];
            elementsDict[elementIDName] = relatedInfo;
            parentElement.removeChild(relatedInfo);
        }
        return elementsDict;
    };

    var listenerHandler = function(event) {
        // remove currently displayed related info element
        var currentlyDisplayed = 
        willShowInfo.getElementsByClassName(listeningElementsRelatedInfo)[0];
        willShowInfo.removeChild(currentlyDisplayed);
        // show related info of triggered element 
        showInfo(this.id);
    };

    var showInfo = function(id) {
        var relatedInfoElement = relatedInfo[id];
        willShowInfo.insertBefore(relatedInfoElement, willShowInfo.firstChild);
    }

    willShowInfo = document.getElementById(willShowInfo);
    // event handlers are added to listening elements, and all elements'
    // related information is removed from dom
    relatedInfo = 
    getRelatedInfo();

    showInfo(firstShownElement);
}

window.onload = managePortraits('portrait-image','mouseover', 'portrait-info',
                                'john_smith1', 'team');

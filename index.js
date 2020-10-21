function addStates(States){
    var currentX = 200;
    var currentY = 200;
    States.forEach(function(state) {
      cy.add({
          group: 'nodes',
          data: { id: state },
          position: { x: currentX, y: currentY }
      });
      currentX += 50;
      currentY += 50;
    });
  }
var arrStates = ['Q1', 'Q2', 'Q3', 'Q4'];
var arrTransitions = ['Q0Q1a', 'Q0Q2a', 'Q1Q2b', 'Q4Q3c', 'Q4Q1c,c', 'Q3Q4a,b'];

function addTransitions(Transitions){
    Transitions.forEach(function(transition){
        const source = transition.charAt(0) + transition.charAt(1);
        const dest = transition.charAt(2) + transition.charAt(3);
        let trans = '';
        for (i = 4; i < transition.length; i++) {
          trans += transition.charAt(i);
        }
        cy.add({
            group: 'edges',
            data: {id: transition, source: source, target: dest, label: trans }
        })
    })
}


var cy = cytoscape({

    container: document.getElementById('cy'), // container to render in
  
    elements: [ // list of graph elements to start with
      { // start state/Q0
        data: { id: 'Q0' }
      },
    ],
  
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'label': 'data(id)'
        }
      },
  
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'label': 'data(label)'
        }
      }
    ],
  
    layout: {
      name: 'grid',
      rows: 1
    }
  
  });
addStates(arrStates);
addTransitions(arrTransitions);
 cy.fit();
  
  
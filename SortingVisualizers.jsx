import React from 'react';
import './SortingVisualizers.css';
import {getMergeSortAnimations} from './SortingAlgorithms';

const blockAmount = 250; //This is for the bar version.

// const number_of_blocks = 108;  This is for my blocks version.

// const number_of_blocks = 200;  This is for my experimental blocks version.

const animationSpeed = 5;

export default class SortingVisualizers extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
        };
    }   

    componentDidMount() {
        document.body.style.backgroundColor = 'black';
        this.resetArray();
    }
    
    resetArray() { 
        /*
        const array = [];
        for (let i = 0; i < number_of_blocks; i++) {
            array.push(randomIntFromInterval(1, 200));  This is for the experimental block version.
        }
        this.setState({array})
        */

        /*
        const array = [];
        for (let i = 0; i < number_of_blocks; i++) {
            array.push(randomIntFromInterval(1, 1000));  This is for my block version with numbers.
        }
        this.setState({array})
        */

        const array = [];
        for (let i = 0; i < blockAmount; i++) {
            array.push(randomIntFromInterval(1, 500));
        this.setState({array})
        }
    }
    
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBlock = document.getElementsByClassName('Array-block');
            const colorChanges = i % 3 !== 2;
            if(colorChanges) {
                const [blockOneIdx, blockTwoIdx] = animations[i];
                const blockOneStyle = arrayBlock[blockOneIdx].style;
                const blockTwoStyle = arrayBlock[blockTwoIdx].style;
                const color = i % 3 === 0 ? 'purple' : 'turquoise';
                setTimeout (() => {
                    blockOneStyle.backgroundColor = color;
                    blockTwoStyle.backgroundColor = color;
                }, i * animationSpeed);
            } else {
                setTimeout (() => {
                    const [blockOneIdx, newValue] = animations[i];
                    const blockOneStyle = arrayBlock[blockOneIdx].style;
                    blockOneStyle.height = newValue + 'px'; 
                    /*
                    // If new value passed to the dimensions of the current block is just 1: pass it as is.
                    if(newValue === 1) {
                        blockOneStyle.height = newValue + 'px'; 
                        blockOneStyle.width = newValue + 'px';
                    // If new value passed to the dimensions of the current block is 2: also pass it as is 
                    // so the block is larger than that with a value of 1.
                    } else if(newValue === 2 ) {
                        blockOneStyle.height = newValue + 'px'; 
                        blockOneStyle.width = newValue + 'px';
                    // If new value passed to the dimensions of the current block is higher than 2 and less
                    // than/equal to 50: divide the value by 2 so there is a min size of 1.5px and max size of 25px This is for the experimental block version.
                    // for these blocks.
                    } else {
                        blockOneStyle.height = newValue / 2 + 'px'; 
                        blockOneStyle.width = newValue / 2 + 'px';
                    } 
                    */
                }, i * animationSpeed);
            }
        }
    }
    
    quickSort() {
        window.alert("The Quick Sort algorithm has not yet been implemented. I fully intend to implement this functionality in the furture.");
    }

    bubbleSort() {
        window.alert("The Bubble Sort algorithm has not yet been implemented. I fully intend to implement this functionality in the furture.");
    }

    /*
    <button className="Insertion-sort-button" onClick={() => this.insertionSort()}> Perform Insertion Sort </button>
    insertionSort() {
        window.alert("The Insertion Sort algorithm has not yet been implemented. I fully intend to implement this functionality in the furture.");
    }
    */

    heapSort() {
        window.alert("The Heap Sort algorithm has not yet been implemented. I fully intend to implement this fucntionality in the furture.");
    }

    render() {
        const {array} = this.state;
        return ( 
            <div className="Array-container">
                {array.map((value, idx) => (
                    <div 
                    className="Array-block" 
                    key={idx}
                    style = {{height: value}}> 
                    </div> 

                    /*
                    <div className="Array-block" 
                    key={idx}
                    style = {{height: value / 2, width: value / 2}}> This is for the experimental block version.
                    </div>
                    */
                ))}
                <button className="Array-button" onClick={() => this.resetArray()}> Create A New Array </button>
                <button className="Merge-button" onClick={() => this.mergeSort()}> Perform Merge Sort </button>
                <button className="Quick-sort-button" onClick={() => this.quickSort()}> Perform Quick Sort </button>
                <button className="Bubble-sort-button" onClick={() => this.bubbleSort()}> Perform Bubble Sort </button>
                <button className="Heap-sort-button" onClick={() => this.heapSort()}> Perform Heap Sort </button>    
            </div>
        );
        
    
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

import React, { Component } from "react"
import "./algocontent.css";
import { InfoBox } from "./infoBox";
import linearSearch from "./assets/linearSearch.png";
import binarySearch from "./assets/binarySearch.png";
import bsStep1 from "./assets/bsStep1.png";
import bsStep2 from "./assets/bsStep2.png";
import bsStep3 from "./assets/bSStep3.png";

export default class BinarySearch extends Component {

    render() {
        return (
            <div className="algo-page-container">
                <div className="main-content">
                    <div className="content-wrapper">
                        <h1>Binary Search Algorithm</h1>
                        <div className="content">
                            <p>Binary search is an algorithm to efficiently search for a target value in a sorted list</p>
                            <InfoBox text="Binary search algorithm looks for the target value in the middel of the list.
                        If the middle value is less than the target value, then we rule out the all the element up to middle 
                        value and middle value itself, namely we discard the left half and look for the target value in the 
                        right half of the list. If the middle value is greater than the target value, then we rule out the right half and
                        look for the target value in left half. Otherwise if the middle value is equal to the target value, then we conclude 
                        the process: we found the target value"/>
                            <p>To appriciate the power of binary search, let's look at a simple less efficient searching algorithm.</p>
                            <h2>Binary search vs Linear Search</h2>
                            <p>Let's start with linear search to provide a baseline for comparison and then see them in action.</p>
                            <InfoBox text="Linear search or linear scan searchs for the target value by comparing each value in our list consecutively
                            ,one after the other, against the target value until the target is found or we reach the end of the list."/>
                            <p>Let's say we have an array A of integers and we are looking for target v = 15. <br />A = &#91; 2, 43, 65, 11, 21, 15, 78 &#93; <br />
                                v = 15
                                <br />
                                <img className="sample-code-img" src={linearSearch} alt="linear search algorithm" />
                                Output: 5
                            </p>
                            <p>Basically what we are doing here is to go through the list, checking elements one by one.
                                So, we check the first element to see if it is the target value. If it is the taret value we
                                are looking for, then we return the index of that element. Otherwise we move on to the next element,
                                check that element. Within the list if we find the taret value, we return the index. If we get to the
                                end of the list without finding the target value we return -1 to indicate that the target value isn't
                                in the list. This is a straightforward search algorithm.
                            </p>
                            <br />
                            <p>Let's see the time complexity of this algorithm. Since we check each element in the list,
                                in worst-case scenario, the target value might be at the end of the list or even not in the list.
                                So if the lenght of the list is n, then in worst case we have to do n iterations.
                                In Big O this is O&#40;n&#41;. It is not that bad.<br />
                                Now let's see binary search.
                            </p>

                            <p>
                                Binary seach is an algortihm of very great use when data is <i>sorted</i>.
                                It is really an amazing searching algortihm. Binary search is clearly superior to linear search.
                                But we have to bear in mind that binary search works with sorted data as opposed to linear search.
                                For linear search it does not matter whether data are sorted or not. So linear search gets the upper hand
                                on binary search in this case. But other than that, Binary search goes beyond the linear search.<br />
                                Let's walk through an example with binary search.
                                <br />
                                list = &#91; 2, 11, 15, 21, 43, 65, 78 &#93;
                                <br />
                                target = 15
                                <br />
                                <br />
                                Here's the algorithm.
                                <br />
                                <img className="sample-code-img" src={binarySearch} alt="binary search algorithm"></img>
                                Output: 2
                            </p>
                            <p>
                                Now let's see what's goint on under the hood<br />
                                Here's what happes.
                                <img className="sample-code-img" src={bsStep1} alt="example step 1" />
                                <br />
                                <br />
                                Green area shows the active search space within which we can look for the target value.
                                we initialize low and high to 0 and 6 respectively. Then inside the while loop, we find
                                the middle index and assign it to mid. Then algorithms check if the value at mid is equal to
                                target value. If it is, it return its index, which is mid.<br />
                                If the target value is greater than the middle value, then we assign low mid + 1.
                                We do so because we don't need to consider the values that comes before the middle element and
                                the middle element itslef. Since the middle element is less than the target value, all elements that comes
                                before the middle element will also be less than the target value, so there is no point looking for target value there.
                                <br />
                                If the target value is less than the middle value, then we assign high mid - 1.
                                Again, We do so because we don't need to consider the values that comes after the middle element and
                                the middle element itslef. Because the middle element is greater than the target value, all elements that comes after the middle element will also be greater
                                than the target value. Therefore we shrink the active search space. Red area indicates the deactive space
                                where we don't search for our target value.
                                <br />
                                In our case, the target value is less than middle value, so we do high = mid - 1 to shrink the active search space.
                                <br />
                                <br />
                                <img className="sample-code-img" src={bsStep2} alt="example step 2" />
                                <br />
                                <br />
                                Now we repeat the process. As you can see from the above picture, low remainded same. High becomes mid - 1 for the reason we mentioned above.
                                We find the mid again and check if it is the target value we're after.
                                <br /> Let's see the third step
                                <br />
                                <br />
                                <img className="sample-code-img" src={bsStep3} alt="example step 3"></img>
                                <br />
                                <br />
                                We check the middle element to see if it is the target value. Since it is less than the target value, we do low mid + 1.
                                This shrinks our search space. At the third step we actually have 1 element in the list. Again we find the middle index,
                                compare the value at that index against target value. And here it is! target value found!
                                <br />
                                <br />
                                Now let's examine the time complexity of binary search.
                                <br />
                                Since at each step we shrink in half, the time complexity of this algortihm is O&#40;log n&#41;.
                                Okay that's really quick. How do we know that it is log n. Logarithms might be frightening, but if you know
                                what it means when analyzing algorithms, it is actually practical concept.
                                <br />
                                <br />
                            </p>
                            <InfoBox text="For positive integer log&#40;n&#41; &#40;based-2&#41; means this: The number of times you need
                                to divide n by 2 before the result is 1 or less. For example let's take a number, say n = 16 how many times do you need
                                to divide 16 by 2 before you get 1 or less. You need to divide it 4 times. 16 / 2 you get 8, 8 / 2 you get 4, 
                                4 / 2  you get 2, 2 / 2 you get 1. That's it. That is what logarithms are. Now actually n might be an odd number. 
                                In that case log base 2 is actually rounded up to the nearest integer."/>
                            <p>Whenever you divide something in half while dealing with some sort of an algorithm, you might want to consider
                                logarithms in that algortihm's time complexity. Just for the sake of an example, take <i>Merge sort</i> algorithm.
                                Its time complexity is nlog&#40;n&#41;, which implies that it has someting to do with dividing. We'll get to that in Merge sort part.
                            </p>
                            <h2>Binary search adaption</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


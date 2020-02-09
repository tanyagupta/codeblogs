# Sentiment_RNN_Exercise from Udacity: Encoding words

This code extract below from a Udacity course and from Python Machine Learning by Sebastian Raschka

```Counter``` objects create frequency distributions
## Counter
```python
>> words = ['red', 'blue', 'red', 'green', 'blue', 'blue']
>>> count = Counter(words)
Counter({'blue': 3, 'red': 2, 'green': 1})
```



## sorted
Return a new sorted list from the items in iterable. It has two optional arguments:
1.  ```key``` specifies a function of one argument that is used to extract a comparison key from each element in iterable (for example, ```key=str.lower```). The default value is ```None``` (compare the elements directly).
2. ```reverse``` is a boolean value. If set to ```True```, then the list elements are sorted as if each comparison were reversed.

```sorted()``` has a ```key`` parameter to specify a function to be called on each list element prior to making comparisons. In the code below, the frequencies of the words are being used to sort from low frequency to high frequency. Then the ```reverse=True``` parameter changes the sort from high frequency to low frequency.
```python
>>from collections import Counter
>>counts = Counter(words)
>>vocab = sorted(counts, key=counts.get, reverse=True)
['blue', 'red', 'green']

```
## enumerate

```enumerate``` takes as a parameter some object that can be iterated over and returns a tuple containing a count (from *start* that defaults to 0) and the values obtained by iterating over the iterable.

```python
>>> list(enumerate(vocab,1))
[(1, 'blue'), (2, 'red'), (3, 'green')]
>>>
```
## Putting it together
```enumerate``` results in the tuple we see above. ```vocab_to_int``` results in a dictionary where the key is the word and the value is the count
```python
vocab_to_int = {word: ii for ii, word in enumerate(vocab, 1)}
>>> vocab_to_int
{'blue': 1, 'red': 2, 'green': 3}
```
review_split looks like ```['bromwell high is a cartoon comedy  it ran at the same time as some other programs about school life  such as  teachers   ....', 'story of a man who has unnatural feelings for a ...', 'homelessness  or houselessness as george carlin stated  h....]``` where each review is an element of the list.
The code below splits each ```review``` and looks up the integer that represents the word. This creates a list of integers that represents the reviews.
```python
>>> reviews_ints = []
for review in reviews_split:
    reviews_ints.append([vocab_to_int[word] for word in review.split()])
```
```reviews_int``` looks like: ```[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],[17, 18, 19, 20, 13, 21, 22, 23, 24, 10, 25, 26, 27, 28, 29, 30, 31]]```

## The complete code
```Python
from collections import Counter
print(len(words))
## Build a dictionary that maps words to integers
vocab_to_int = {}
#words = words[:30]
count = 1
#print(len(words))
for word in words:
    if word not in vocab_to_int:
        vocab_to_int[word]=count
        count = count +1

#reviews_split = reviews_split[:30]
#print(reviews_split[:30])

#print(vocab_to_int)
## use the dict to tokenize each review in reviews_split
## store the tokenized reviews in reviews_ints

reviews_ints = []
for review in reviews_split:
    reviews_ints.append([vocab_to_int[word] for word in review.split()])
#print(len(reviews_ints))
print(reviews_ints[:30])
```

## More on sort
1. Python lists have a built-in ```list.sort()``` method that modifies the list in-place.
1. There is also a ```sorted()``` built-in function that builds a new sorted list from an iterable.
1. ```list.sort()``` method is only defined for lists. In contrast, the sorted() function accepts any iterable.

## What does this code do ?
### Code #1
```python
review_lens = Counter([len(x) for x in reviews_ints])
```
The code above takes each item in reviews_ints (which btw is a list of numbers like so ```[[21025, 308, 6, 3, 1050, 207...23]]```) and calculates the length of each element (i.e. review) such that the key is the length and the value is the item. It will kind of look like ```Counter({132: 185, 130: 185, 135: 178, 129: 177, 125: 177, 128: 173, 137: 171, 133: 171, 138: 170, 136: 170........0:1})```
### Code #2
```python
non_zero_idx = [ii for ii, review in enumerate(reviews_ints) if len(review) != 0]
```
```enumerate``` takes as a parameter some object that can be iterated over and returns a tuple containing a count (from start that defaults to 0) and the values obtained by iterating over the iterable. So the code above looks at whether the length of the review is zero, and if it not zero, then it captures the index in an array.

For example:
```python
>>> review_ints = [[21025, 308, 6, 3, 1050, 207],[2838,234,3,5,66],[345,3,8,9,34],[]]
>>> [ii for ii, review in enumerate(review_ints) if len(review) != 0]
[0, 1, 2]
```
The code ignores the last element of the array since the length is zero.  
### Code #3
```python
reviews_ints = [reviews_ints[ii] for ii in non_zero_idx]
encoded_labels = np.array([encoded_labels[ii] for ii in non_zero_idx])
```
The code above takes the non zero indices and gets the element that the indices refer to. However now the zeros have been removed.
Encoded labels creates an array of the labels of all the non zero items.
Similar to:
```[1 0 1 0 1 0 1 0 1 0 1 0 1 0 1]```

## Padding
To deal with both short and very long reviews, we'll pad or truncate all our reviews to a specific length. For reviews shorter than some seq_length, we'll pad with 0s. For reviews longer than seq_length, we can truncate them to the first seq_length words. A good seq_length, in this case, is 200.

### Exercise: Define a function that returns an array features that contains the padded data, of a standard size, that we'll pass to the network.

*The data should come from review_ints, since we want to feed integers to the network.
Each row should be seq_length elements long.*
*For reviews shorter than seq_length words, left pad with 0s. That is, if the review is* ```['best', 'movie', 'ever'], [117, 18, 128]``` *as integers, the row will look like* ```[0, 0, 0, ..., 0, 117, 18, 128]```.
*For reviews longer than seq_length, use only the first seq_length words as the feature vector.
As a small example, if the seq_length=10 and an input review is:* ```[117, 18, 128]```
*The resultant, padded sequence should be:* ```[0, 0, 0, 0, 0, 0, 0, 117, 18, 128]```
*Your final features array should be a 2D array, with as many rows as there are reviews, and as many columns as the specified seq_length.*
```python
>>> reviews_ints = [[21025, 308, 6, 3, 1050], [63, 4, 3, 125, 36]]
>>> seq_length = 20
>>> features = np.zeros((len(reviews_ints), seq_length), dtype=int)
>>> features
array([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
>>> enumerate(reviews_ints)
<enumerate object at 0x10b5f4948>
>>> list(enumerate(reviews_ints))
[(0, [21025, 308, 6, 3, 1050]), (1, [63, 4, 3, 125, 36])]
>>> for i, row in enumerate(reviews_ints):
...     features[i, -len(row):] = np.array(row)[:seq_length]
...
>>> features
array([[    0,     0,     0,     0,     0,     0,     0,     0,     0,
            0,     0,     0,     0,     0,     0, 21025,   308,     6,
            3,  1050],
       [    0,     0,     0,     0,     0,     0,     0,     0,     0,
            0,     0,     0,     0,     0,     0,    63,     4,     3,
          125,    36]])
```          
The following line  ```features[i, -len(row):] = np.array(row)[:seq_length]``` accesses the first and second item of features and replaces the last five zeros of the features array element with the elements of the array. This pads the array with zeros from the left side.

### Another example of padding with comments
```Python
def pad_features(reviews_ints, seq_length):
    ''' Return features of review_ints, where each review is padded with 0's
        or truncated to the input seq_length.
    '''
    #print (len(reviews_ints))
    reviews_ints = [reviews_ints[0][:5],reviews_ints[1][:5]]
    print(reviews_ints)
    print (len(reviews_ints))
    #print (seq_length)
    # getting the correct rows x cols shape
    features = np.zeros((len(reviews_ints), seq_length), dtype=int)

    print(features)
    print("######")
    # for each review, I grab that review and
    for i, row in enumerate(reviews_ints):
        print("*seq_length\n",seq_length)
        print("*-len(row)\n",len(row))
        print("*i\n",i)
        print("*row\n",row)
        print("*features[i, -len(row):]\n",features[i, -len(row):])
        print("This is accessing the ith element of the 0th item in the array")
        print("*np.array(row)\n",np.array(row))
        print("*np.array(row)[:seq_length]\n",np.array(row)[:seq_length])
        features[i, -len(row):] = np.array(row)[:seq_length]

    print("*features\n",features)

    return features
# Test your implementation!
​
seq_length = 20
​
features = pad_features(reviews_ints, seq_length=seq_length)
​
## test statements - do not change - ##
#assert len(features)==len(reviews_ints), "Your features should have as many rows as reviews."
#assert len(features[0])==seq_length, "Each feature row should contain seq_length values."
​
# print first 10 values of the first 30 batches
# print(features[:30,:10])
[[21025, 308, 6, 3, 1050], [63, 4, 3, 125, 36]]
2
[[0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]]
######
*seq_length
 20
*-len(row)
 5
*i
 0
*row
 [21025, 308, 6, 3, 1050]
*features[i, -len(row):]
 [0 0 0 0 0]
This is accessing the ith element of the 0th item in the array
*np.array(row)
 [21025   308     6     3  1050]
*np.array(row)[:seq_length]
 [21025   308     6     3  1050]
*seq_length
 20
*-len(row)
 5
*i
 1
*row
 [63, 4, 3, 125, 36]
*features[i, -len(row):]
 [0 0 0 0 0]
This is accessing the ith element of the 0th item in the array
*np.array(row)
 [ 63   4   3 125  36]
*np.array(row)[:seq_length]
 [ 63   4   3 125  36]
*features
 [[    0     0     0     0     0     0     0     0     0     0     0     0
      0     0     0 21025   308     6     3  1050]
 [    0     0     0     0     0     0     0     0     0     0     0     0
      0     0     0    63     4     3   125    36]]
      ```

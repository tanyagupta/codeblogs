# Machine learning code extract
#### sort, counter, enumerate etc.

## Sort
1. Python lists have a built-in ```list.sort()``` method that modifies the list in-place.
1. There is also a ```sorted()``` built-in function that builds a new sorted list from an iterable.
1. ```list.sort()``` method is only defined for lists. In contrast, the sorted() function accepts any iterable.

This code extract below from a Udacity course and from Python Machine Learning by Sebastian Raschka

```Counter``` objects create frequency distributions
## Counter
```
>> words = ['red', 'blue', 'red', 'green', 'blue', 'blue']
>>> count = Counter(words)
Counter({'blue': 3, 'red': 2, 'green': 1})
```
Both ```list.sort()``` and ```sorted()``` have a key parameter to specify a function to be called on each list element prior to making comparisons. In the code below, the frequencies of the words are being used to sort from low frequency to high frequency. Then the ```reverse=True``` parameter changes the sort from high frequency to low frequency.

## enumerate
```
>>> list(enumerate(vocab,1))
[(1, 'blue'), (2, 'red'), (3, 'green')]
>>>
```
```enumerate``` takes as a parameter some object that can be iterated over and returns a tuple containing a counts from *start* that defaults to 0 and the values obtained by iterating over the iterable.
```
>>from collections import Counter
>>counts = Counter(words)
>>vocab = sorted(counts, key=counts.get, reverse=True)
['blue', 'red', 'green']

```
dd
```
vocab_to_int = {word: ii for ii, word in enumerate(vocab, 1)}

reviews_ints = []
for review in reviews_split:
    reviews_ints.append([vocab_to_int[word] for word in review.split()])
```

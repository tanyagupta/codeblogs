# Perl "quotes" #yeah, the quotes are in quotes

Perl is a stunningly customizable language. Its original motto ["There's more than one way to do it" (TMTOWTDI or TIMTOWTDI, pronounced Tim Toady)](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it) makes it a great language for programmers to write very creative code. The flip side of this is that it makes it very hard for someone else to read them. This post **thankfully** is not about the pros and cons of this motto. Here I show you some code that demonstrates how versatile perl code can be!

>####In perl you can write a word without any single or double quotes around it and assign it to a variable. 

```perl
my $bar = TheBar;
say $bar
```
As long as `TheBar` is not a declared variable (or file handle or keywords, etc.) perl will assume it is a string (an english word to be precise). These are called  `barewords` in perl lingo. Of course if you think this is not a good idea perl gives you the flexibility to turn the feature on and off as you please with `use strict q(subs)`  and `no strict q(subs)` respectively.

>####In perl a quote can be a quote or anything else you want it to be!

Suppose, you want to put three words (e.g. unix commands) in a array. In most languages the code will look something like `commands = ['ls', 'pwd', 'who'];` In perl there are many ways of doing this:

```perl
#you can do the typical of course 
my @commands = ('ls', 'pwd', 'who');
# and you can skip the quotes and do it with barewords as I mentioned above
@commands = (ls, pwd, who); 

# but you can be a cool perl monger and do this 
@commands = qw[ls pwd who];
``` 
1. No quotes around the words, less typing.
2. No commas separating the words even less typing!
2. `[]` instead of `()` - more common array notation

>####We can do get it all for the price of that little `qw` thing.

### Enter the q operator

Using the q operator **you** can decide what your quotes for string literals should be **and** how do you want perl to interpret the literal.  

```perl
# use two *s to mark a literal then ask perl to interpret the literal as a single quoted string 
$statement = q *the star is my quote*; # same as $statement = 'the star is my quote';

# just add a q after the q and you have double quotes
$statement = qq *the star is my quote*; #qq for double quote
# double quotes are useful because they allow you to add variables to the literal
$statement = qq * the value is: $command* #will put the value of $command in the literal

# you can even tell perl to interpret literals as shell commands!
@commands = qw[ls pwd who]; 
# just add an x after your q
$output = qx ($commands[1]); # will execute a pwd command and store it in $output 

```
> And yes we can be both creative and confusing! Can you guess what will be in $output? 

```perl
@commands = qw[ls pwd who]; 
$output =  qq[ran: $commands[2]\n] . qx($commands[2]);
```


###Aside 
TIMTOWTDI motto is opposite of Zen of Python ["There should be one — and preferably only one — obvious way to do it"](https://www.python.org/dev/peps/pep-0020/). 


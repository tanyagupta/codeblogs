use v5.10; # to Say


#language feature
# string literals can be unquoted
# q operator and its customization capabilities

# why blogworthy - quirks of a language

# assign the string to the variable - (if TheBar is not a variable or filehandle or anything special)
my $bar = TheBar;
# you can stop this of course using strict `subs` no strict `subs`
# speeds up programmar time - barrier to entry if you are not made aware of early
# not a feature you expect to see


# q (quote) operators
# allows to "quote" strings quote is in quotes because quotes can be anything you want it to be in perl

# say you want to put three unix command in a array in most language it will be something like
# commands = ['ls', 'pwd', 'who']
# in perl it is usally can be many
my @commands = ('ls', 'pwd', 'who');
# is ok because they are automated
@commands = (ls, pwd, who);
@commands = qw[ls pwd who];

# the quotes are missing, the commas are missing and there are brackets
# the w tells what you want in this case words, looks for the delimter - your quote equivalant
# then does it

#q is single quote, qq is double, qw is list of word and qx is commands
$statement = q *the star is my quote*;
say length $statement;

# qx
$rem = qx ($commands[1]);

say length $rem;

# customize q
# page 63

my $command = $commands[2];
$output =  q[running $command] .
  qq[\nthe value is: $command] .
  " \nresult is\n"  . qx($command);
# explain
$output = $output =  qq[ran: $commands[2]\n] . qx($commands[2]);
say $output;
# writeable - great for company or your own
# not good readbale

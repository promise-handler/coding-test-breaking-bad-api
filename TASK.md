# Coding Test - Breaking Bad API

You are part of a team that builds a Breaking Bad fan-site. You are in charge of writing a program that returns the list
of episodes from the Breaking Bad tv show, where the given characters have appeared together.

## Requirements

- Use the [Breaking Bad API](https://breakingbadapi.com/) to retrieve the necessary information.
- Write a class or module that exposes a `search` method.
- The `search` method can be called with a single `String` or `Array` of strings and should return `Array` of episodes.
- Provide instructions to demonstrate the program works as required

## Example

If we call the program with `"Tuco Salamanca"` the output must be the following

    [
        'S0106 - Crazy Handful of Nothin',
        'S0107 - A No-Rough-Stuff-Type Deal',
        'S0201 - Seven-Thirty-Seven',
        'S0202 - Grilled',
    ]

And if we call the program with `["Walter White", "Krazy-8"]` the output should be

    [
        'S0101 - Pilot',
        'S0102 - Cat's in the Bag...',
        'S0103 - ...And the Bag's in the River'
    ]
"""
Module doc :  this file is for testing "black"
"""


def abc(num: int):
    """Takes in a number n, returns the square of n"""
    return num + 2


print(abc(10))


class SomeText:
    """SomeText class"""

    def __init__(self):
        """init function"""
        self.some_id = 1


class SomeText2:
    """SomeText2 class"""

    def __init__(self):
        """Init method"""
        self.some_id = 2

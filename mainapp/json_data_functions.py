# def remove_comments(s):
#     import re

#     p = re.compile(r'//.*?\n')
#     return p.sub('', s)

def clean_json(s):
    import re

    p = re.compile('((?<=\[)\s*\'|(?<={)\s*\'|(?<=,)\s*\'|\'\s*(?=:)|(?<=:)\s*\'|\'\s*(?=,)|\'\s*(?=})|\'\s*(?=]))')
    new_str = p.sub('\"', s)
    p1 = re.compile('//.*?\n')
    new_str = p1.sub('', new_str)
    return new_str
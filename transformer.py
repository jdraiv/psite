
from react import jsx


def convert_to_js(filename):
    jsx.transform(
        'static/components/jsx/%s.jsx' % filename, 
        js_path='static/components/js/%s.js' % filename)

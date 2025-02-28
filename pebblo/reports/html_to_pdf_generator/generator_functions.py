"""
Defines functions to generate PDF from HTML for respective renderers
"""

import os
from weasyprint import HTML, CSS
from xhtml2pdf import pisa


# Creates PDF from template using weasyprint
def weasyprint_pdf_converter(source_html, output_path, search_path):
    """PDF generator function for weasyprint renderer"""
    base_url = os.path.dirname(os.path.realpath(__file__))
    html_doc = HTML(string=source_html, base_url=base_url)
    return html_doc.write_pdf(
        target=output_path, stylesheets=[CSS(search_path + "/index.css")]
    )


# Creates PDF from template using xhtml2pdf
def xhtml2pdf_pdf_converter(source_html, output_path, _):
    """PDF generator function for xhtml2pdf renderer"""
    with open(output_path, "w+b") as result_file:
        pisa_status = pisa.CreatePDF(src=source_html, dest=result_file)
        result_file.close()
        return pisa_status.err

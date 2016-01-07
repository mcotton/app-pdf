
### Installation ###

Need to have Phantom.js and GhostScript installed

    sudo npm install phantomjs -g


    brew install ghostscript



### Running ###

    phantomjs ~/dev/app-pdf/html2pdf.js && gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUITE -dBATCH -sOutputFile=output2.pdf output.pdf 




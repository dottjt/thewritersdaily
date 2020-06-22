#!/bin/sh

# OUTPUT_FOLDER='../thewritersdaily_podcast/episodes-edited'
# OUTPUT_FOLDER='../theneverfapdeluxedaily_podcast/episodes-edited'
OUTPUT_FOLDER='./util/test_template_output'

EPNUMPREFIX="0"
EPNUMPREFIXNEXT="1"

OUTER1="1";
OUTER2="2"
OUTER3="3"
OUTER4="4"
OUTER5="5"

# OUTER1="6"
# OUTER2="7"
# OUTER3="8"
# OUTER4="9"
# OUTER5="0"

cp -r ./util/templates/* $OUTPUT_FOLDER

# For normal
mv $OUTPUT_FOLDER/epX1 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}
mv $OUTPUT_FOLDER/epX2 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}
mv $OUTPUT_FOLDER/epX3 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}
mv $OUTPUT_FOLDER/epX4 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}
mv $OUTPUT_FOLDER/epX5 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER5}
mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}/epX1.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}/ep${EPNUMPREFIX}${OUTER1}.sesx
mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}/epX2.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}/ep${EPNUMPREFIX}${OUTER2}.sesx
mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}/epX3.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}/ep${EPNUMPREFIX}${OUTER3}.sesx
mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}/epX4.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}/ep${EPNUMPREFIX}${OUTER4}.sesx
mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER5}/epX5.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER5}/ep${EPNUMPREFIX}${OUTER5}.sesx

sed -i '' -e "s/EPX1/ep${EPNUMPREFIX}${OUTER1}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER1}/ep${EPNUMPREFIX}${OUTER1}.sesx
sed -i '' -e "s/EPX2/ep${EPNUMPREFIX}${OUTER2}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER2}/ep${EPNUMPREFIX}${OUTER2}.sesx
sed -i '' -e "s/EPX3/ep${EPNUMPREFIX}${OUTER3}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER3}/ep${EPNUMPREFIX}${OUTER3}.sesx
sed -i '' -e "s/EPX4/ep${EPNUMPREFIX}${OUTER4}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER4}/ep${EPNUMPREFIX}${OUTER4}.sesx
sed -i '' -e "s/EPX5/ep${EPNUMPREFIX}${OUTER5}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER5}/ep${EPNUMPREFIX}${OUTER5}.sesx

# # For ENUMPREFIXNEXT
# mv $OUTPUT_FOLDER/epX1 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}
# mv $OUTPUT_FOLDER/epX2 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}
# mv $OUTPUT_FOLDER/epX3 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}
# mv $OUTPUT_FOLDER/epX4 $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}
# mv $OUTPUT_FOLDER/epX5 $OUTPUT_FOLDER/ep${EPNUMPREFIXNEXT}${OUTER5}
# mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}/epX1.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER1}/ep${EPNUMPREFIX}${OUTER1}.sesx
# mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}/epX2.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER2}/ep${EPNUMPREFIX}${OUTER2}.sesx
# mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}/epX3.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER3}/ep${EPNUMPREFIX}${OUTER3}.sesx
# mv $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}/epX4.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIX}${OUTER4}/ep${EPNUMPREFIX}${OUTER4}.sesx
# mv $OUTPUT_FOLDER/ep${EPNUMPREFIXNEXT}${OUTER5}/epX5.sesx $OUTPUT_FOLDER/ep${EPNUMPREFIXNEXT}${OUTER5}/ep${EPNUMPREFIXNEXT}${OUTER5}.sesx

# sed -i '' -e "s/EPX1/ep${EPNUMPREFIX}${OUTER1}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER1}/ep${EPNUMPREFIX}${OUTER1}.sesx
# sed -i '' -e "s/EPX2/ep${EPNUMPREFIX}${OUTER2}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER2}/ep${EPNUMPREFIX}${OUTER2}.sesx
# sed -i '' -e "s/EPX3/ep${EPNUMPREFIX}${OUTER3}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER3}/ep${EPNUMPREFIX}${OUTER3}.sesx
# sed -i '' -e "s/EPX4/ep${EPNUMPREFIX}${OUTER4}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIX}${OUTER4}/ep${EPNUMPREFIX}${OUTER4}.sesx
# sed -i '' -e "s/EPX5/ep${EPNUMPREFIXNEXT}${OUTER5}/g" ./${OUTPUT_FOLDER}/ep${EPNUMPREFIXNEXT}${OUTER5}/ep${EPNUMPREFIXNEXT}${OUTER5}.sesx

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowCopyIcon } from './ArrowCopyIcon.js';
import { BasicsSearch } from './BasicsSearch/BasicsSearch.js';
import { BellIcon2 } from './BellIcon2.js';
import { BellIcon } from './BellIcon.js';
import { BelloutlineIcon } from './BelloutlineIcon.js';
import { BgIcon } from './BgIcon.js';
import { CaduceusIcon } from './CaduceusIcon.js';
import { ChartIcon } from './ChartIcon.js';
import { DownArrowIconIcon } from './DownArrowIconIcon.js';
import { Ellipse46Icon } from './Ellipse46Icon.js';
import { FondIcon } from './FondIcon.js';
import { Group22Icon } from './Group22Icon.js';
import { Group1000001788Icon } from './Group1000001788Icon.js';
import { GroupIcon } from './GroupIcon.js';
import { IconPlaceholder } from './IconPlaceholder/IconPlaceholder.js';
import { IconsMoreHorizontalIcon2 } from './IconsMoreHorizontalIcon2.js';
import { IconsMoreHorizontalIcon3 } from './IconsMoreHorizontalIcon3.js';
import { IconsMoreHorizontalIcon } from './IconsMoreHorizontalIcon.js';
import { LeisureSport_MeditationMeditat } from './LeisureSport_MeditationMeditat.js';
import { LineIcon2 } from './LineIcon2.js';
import { LineIcon3 } from './LineIcon3.js';
import { LineIcon } from './LineIcon.js';
import { LocationIconIcon } from './LocationIconIcon.js';
import { MajesticonsHome } from './MajesticonsHome/MajesticonsHome.js';
import { OvalIcon2 } from './OvalIcon2.js';
import { OvalIcon } from './OvalIcon.js';
import { RectangleIcon } from './RectangleIcon.js';
import { TechnologyMicrophone } from './TechnologyMicrophone/TechnologyMicrophone.js';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector3Icon } from './Vector3Icon.js';
import { Vector4Icon } from './Vector4Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './WebDashboard.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1004:1368 */
export const WebDashboard: FC<Props> = memo(function WebDashboard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame19}>
        <div className={classes.frame18}>
          <div className={classes.frame8}>
            <div className={classes.rectangle}></div>
          </div>
        </div>
        <div className={classes.frame17}>
          <div className={classes.frame82}>
            <div className={classes.rectangle2}></div>
            <div className={classes.excellent}>Risk Assesment</div>
          </div>
        </div>
        <div className={classes.frame16}>
          <div className={classes.frame83}>
            <div className={classes.rectangle3}></div>
            <div className={classes.excellent2}>Report</div>
          </div>
        </div>
      </div>
      <div className={classes.slide1691}>
        <div className={classes.content}>
          <div className={classes.frame2}>
            <div className={classes.rectangle32}></div>
            <div className={classes.chart}>
              <ChartIcon className={classes.icon4} />
            </div>
            <div className={classes.form}>Form</div>
          </div>
          <div className={classes.frame1}>
            <div className={classes.rectangle4}></div>
            <div className={classes.result}>Result</div>
            <div className={classes.heart1}></div>
            <div className={classes.vector3}>
              <VectorIcon className={classes.icon5} />
            </div>
          </div>
          <div className={classes.frame3}>
            <div className={classes.rectangle1}></div>
            <MajesticonsHome
              className={classes.majesticonsHome}
              classes={{ group: classes.group }}
              swap={{
                group: (
                  <div className={classes.group}>
                    <GroupIcon className={classes.icon} />
                  </div>
                ),
              }}
            />
            <div className={classes.dashboard}>Dashboard</div>
          </div>
        </div>
        <div className={classes.logo}>
          <div className={classes.healthish}>Healthish</div>
          <div className={classes.caduceus}>
            <CaduceusIcon className={classes.icon6} />
          </div>
        </div>
      </div>
      <div className={classes.textInput}>
        <div className={classes._TextInput}>
          <div className={classes.inputContent}>
            <BasicsSearch
              className={classes.leftIcon}
              classes={{ vector: classes.vector }}
              swap={{
                vector: (
                  <div className={classes.vector}>
                    <VectorIcon2 className={classes.icon2} />
                  </div>
                ),
              }}
            />
            <div className={classes.placeholderValue}>
              <div className={classes.placeholder}>Search any keywords</div>
            </div>
            <TechnologyMicrophone
              className={classes.rightIcon}
              classes={{ vector: classes.vector2 }}
              swap={{
                vector: (
                  <div className={classes.vector2}>
                    <VectorIcon3 className={classes.icon3} />
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.frame182}>
        <div className={classes.group1000001809}>
          <div className={classes.bG}>
            <div className={classes.elementsBG}>
              <div className={classes.color}></div>
              <div className={classes.group8Copy}>
                <div className={classes.rectangleCopy}></div>
                <div className={classes.group22}>
                  <Group22Icon className={classes.icon7} />
                </div>
                <div className={classes.month}>Month</div>
                <div className={classes.arrowCopy}>
                  <ArrowCopyIcon className={classes.icon8} />
                </div>
              </div>
            </div>
            <div className={classes.dataAnalysis}>Data Analysis</div>
            <div className={classes.iconsMoreHorizontal}>
              <IconsMoreHorizontalIcon className={classes.icon9} />
            </div>
          </div>
        </div>
        <div className={classes.group1000001808}>
          <div className={classes.rectangle19}></div>
          <div className={classes.iconsMoreHorizontal2}>
            <IconsMoreHorizontalIcon2 className={classes.icon10} />
          </div>
        </div>
      </div>
      <div className={classes.frame15}></div>
      <div className={classes.frame172}>
        <div className={classes.group1000001789}>
          <div className={classes.rectangle8}></div>
        </div>
        <div className={classes.group1000001790}>
          <div className={classes.rectangle7}></div>
        </div>
        <div className={classes.group1000001788}>
          <Group1000001788Icon className={classes.icon11} />
        </div>
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.dashboardOverview}>Dashboard Overview</div>
      <div className={classes.helloJohnDoe}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Hello</span>
          <span className={classes.label2}> John Doe,</span>
        </p>
      </div>
      <div className={classes.haveANiceDayAndDonTForgetToTak}>
        Have a nice day and don’t forget to take care of your health!
      </div>
      <div className={classes.learnMore}>Learn more</div>
      <div className={classes.downArrowIcon}>
        <DownArrowIconIcon className={classes.icon12} />
      </div>
      <div className={classes.leisureSport_MeditationMeditat}>
        <LeisureSport_MeditationMeditat className={classes.icon13} />
      </div>
      <div className={classes.bG2}>
        <BgIcon className={classes.icon14} />
      </div>
      <div className={classes.a1}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.bell}>
        <BellIcon className={classes.icon15} />
      </div>
      <div className={classes.healthAppointment}>Health appointment </div>
      <div className={classes.mrDokTomm}>Mr Dok tomm</div>
      <div className={classes._920AM1130}>09:20AM - 11:30</div>
      <div className={classes.rectangle142}></div>
      <div className={classes.bell2}>
        <BellIcon2 className={classes.icon16} />
      </div>
      <div className={classes.meetingWithTokDalang}>Meeting with Tok Dalang</div>
      <div className={classes._70AM}>07:00AM</div>
      <div className={classes.dueSoon}>Due Soon</div>
      <div className={classes.frame11}>
        <div className={classes.meditation}>
          <div className={classes.rectangle5}></div>
          <div className={classes.meditation2}>Meditation</div>
          <div className={classes._50PM60PM}>5:00PM - 6:00PM</div>
          <div className={classes.coachTimBjorvick}>Coach : Tim Bjorvick</div>
          <div className={classes.postWorkoutSession}>Suggestion</div>
        </div>
        <div className={classes.iconsMoreHorizontal3}>
          <IconsMoreHorizontalIcon3 className={classes.icon17} />
        </div>
      </div>
      <div className={classes.vector32}>
        <Vector3Icon className={classes.icon18} />
      </div>
      <div className={classes.vector4}>
        <Vector4Icon className={classes.icon19} />
      </div>
      <div className={classes.medium_User}>
        <div className={classes.johnDoe}>John Doe</div>
        <div className={classes._25YearsOldLondon}>200 years old</div>
        <div className={classes.ellipse46}>
          <Ellipse46Icon className={classes.icon20} />
        </div>
        <div className={classes.avatar}></div>
        <div className={classes.location}>
          <div className={classes.newYorkUSA}>New York, USA</div>
          <div className={classes.locationIcon}>
            <LocationIconIcon className={classes.icon21} />
          </div>
        </div>
        <div className={classes.group18}>
          <div className={classes.blood}>Blood</div>
          <div className={classes.height}>Height</div>
          <div className={classes.weight}>Weight</div>
          <div className={classes.o}>O+</div>
          <div className={classes._186cm}>186cm</div>
          <div className={classes._90kg}>90kg</div>
          <div className={classes.line}>
            <LineIcon className={classes.icon22} />
          </div>
          <div className={classes.line2}>
            <LineIcon2 className={classes.icon23} />
          </div>
        </div>
        <div className={classes.line3}>
          <LineIcon3 className={classes.icon24} />
        </div>
      </div>
      <div className={classes.datePicker}>
        <div className={classes.mon}>Mon</div>
        <div className={classes.tues}>Tues</div>
        <div className={classes.rectangle9}></div>
        <div className={classes.wed}>Wed</div>
        <div className={classes.thu}>Thu</div>
        <div className={classes.fri}>Fri</div>
        <div className={classes.sat}>Sat</div>
        <div className={classes.sun}>Sun</div>
        <div className={classes.mon2}>Mon</div>
        <div className={classes._9}>9</div>
        <div className={classes._10}>10</div>
        <div className={classes._11}>11</div>
        <div className={classes.oval}>
          <OvalIcon className={classes.icon25} />
        </div>
        <div className={classes._12}>12</div>
        <div className={classes._13}>13</div>
        <div className={classes.oval2}>
          <OvalIcon2 className={classes.icon26} />
        </div>
        <div className={classes._14}>14</div>
        <div className={classes._15}>15</div>
        <div className={classes._16}>16</div>
        <div className={classes.rectangle10}>
          <RectangleIcon className={classes.icon27} />
        </div>
        <div className={classes.march}>March</div>
        <div className={classes.vector5}>
          <VectorIcon4 className={classes.icon28} />
        </div>
        <div className={classes.addReminder}>Add reminder</div>
      </div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon29} />
      </div>
      <div className={classes.frame14}>
        <div className={classes.bellOutline}>
          <BelloutlineIcon className={classes.icon30} />
        </div>
        <div className={classes.fond}>
          <FondIcon className={classes.icon31} />
        </div>
        <div className={classes.counter}>1</div>
      </div>
      <div className={classes.pages}>Pages </div>
      <div className={classes.unnamed}>/ </div>
      <div className={classes.tables}>Dashboard</div>
      <div className={classes.frame20}>
        <div className={classes.text}>
          Disclaimer: The results from this test are not intended to diagnose or treat any disease, or offer personal
          medical advice. The model was only trained in 300,000 data and with personal attributes only. Moreover, the
          analysis of this models states that it is likely to classify certain attributes such as the sex of the person,
          their general health status, and being diabetic as high importance in determining if the person is at risk or
          not.
        </div>
      </div>
    </div>
  );
});

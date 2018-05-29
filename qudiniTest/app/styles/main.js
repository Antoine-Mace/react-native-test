import * as value from "./var/colors.js";
import {platform} from "./var/device.js";

const styles = {
  view: {
    backgroundColor: value.COLOR_WHITE2,
    flexGrow: 1
  },
  ListItem: {
    paddingTop: platform === 'ios' ? 10 : 5,
    paddingBottom: platform === 'ios' ? 10 : 5
  }
};

export default styles
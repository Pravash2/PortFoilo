import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  bigAvatar: {
    marginTop: 55,
    marginBottom: 10,
    padding: 0,
    width: `${window.innerWidth / 6}px`,
    height: `${window.innerWidth / 6}px`
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Remy Sharp"
        src="https://lh3.googleusercontent.com/kcRZ5VqupnulktS_PVkpZVJkr65q4mtMLlJ1xxGebbibqIQegpLmZCohmqUaOCYjnycVW-46G98ImZwekXC3QtS9hqPGaOAijupCMBFWEXJFzGNmKocnms1rfyA9RQLW3ISkfsAZfBFnHoVusc6Tyfo1fq4eJD1yTnbWQbgsnzZta-g3exMIYpdgRA-PfSdXQWKJtfy1X9r17GEc-wUM2jP2L0OTTDIoUqYht0IB5IGFtewNxUYXCvXQ9afgn8qAO9JlzTP_ijlWXN4FZseRro_UK3z1fEsnyt8JeqsTOKVjUQS39S0ARwhrQjEmcCT1LiRNFlAUQgDyI0N0xG9ODl8KtW8So7irbB81t8yxPuVejyv7S35atqem7GJCVyUFVtXFfwSxEZkGS1ASuCsbFGIvVnejs8fmTzXUIxqPcqkJWiQAQ_Qls9FmJJ1JQ4valNUZQfvQABsa-BedbKRlRf6JRu8UT23H-p09wBgwNCmzJY0-V6I2rCm2jZiD89kQ-Utuk5aiEg3Lql7jcOu6xEnv_tYg3PtzMBt8m6dZTxmW9EuXYAKRgow3dx0Jiej3Gryn78imiTGxa2oEJLbltJMWWDTqL9UC42NO-rL0YxLNfKFykxXBAJFVxKi5F97CTc3gYf3R_KlQR9bq2P2Tn902=w631-h630-no"
        className={classes.bigAvatar}
      />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);

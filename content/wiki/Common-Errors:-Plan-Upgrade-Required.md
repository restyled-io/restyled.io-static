If Restyled is run on a private repository, and your plan doesn't allow that, you will receive this error. The error should contain a specific reason (such as having a public-only or limited repositories plan) and, if possible, a URL to upgrade. You can also upgrade your plan at any time on our [GitHub Marketplace Listing](https://github.com/marketplace/restyled-io).

### GitHub Student Pack Users

The GitHub Student Pack grants free private repository restyling on **repositories under your GitHub user only**. Restyled plans apply based on _repository_, not _author_. This means repositories hosted under organizations you belong to are not granted private repository restyling through your Student Pack. Such repositories will still show Plan Upgrade Required errors unless that organization purchases a plan.

For more details, see [here](https://github.com/restyled-io/restyled.io/wiki/Missing-GitHub-Student-Developer-Pack-Plan).

### Changing the enabled repositories in a limited plan

If using a plan like _Solo_, which is limited to one private repository, Restyled will enable the first repository it sees. Which repositories are enabled or not can be changed at any time on [your profile page](https://restyled.io/profile).

> **Note**
> because of a limitation in GitHub's APIs, we cannot display repositories from an organization where your membership is private. If you need to change which repositories are enabled in such a case, please reach out to support@restyled.io.

### Preventing error statuses on Pull Requests

When using a limited private repository plan, if your installation is still configured to send events for all repositories, you will receive this error on all Pull Requests in your non-enabled repositories. To prevent that, adjust the repositories configuration in your installation settings:

- Navigate to https://github.com/settings/installations
- Locate the Restyled item under _Installed GitHub Apps_, click _Configure_
- Adjust _Repository access_ to align with your Restyled-enabled repositories

  ![access](https://github.com/restyled-io/restyled.io/assets/50812/6d89fa8c-58cd-4483-9320-20904a3a0837)
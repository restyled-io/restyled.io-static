We appreciate anyone who puts effort into identifying and reporting security vulnerabilities. This page documents some commonly-asked questions about how this relates to our project.

## How do I disclose vulnerabilities?

Email support@restyled.io. If you like, you can encrypt emails with [this PGP key](https://keyserver.ubuntu.com/pks/lookup?search=support%40restyled.io&fingerprint=on&op=index).

## Do you pay bounties?

We are a single-developer project with extremely limited funds to pay bounties. While we have a nominal amount of paying users, the product does not generate enough revenue to cover operating costs and so costs said single-developer money each month to run. Therefore, while we will evaluate things on a case-by-case basis, **it is unlikely we can pay bounties**.

## Known Non-Vulnerabilities

Reports for any of these items will be ignored.

### DMARC

We do not configure DMARC records for our domain. We do not consider this a vulnerability. Configuring DMARC is complex and error-prone and we choose not to take on that complexity as it is not necessary for our project. We do configure DKIM and SPF, our own emails show as authenticated and spoofed emails as not authenticated (via DKIM) and typically reach spam folders for this reason. Our systems do not process payments nor do they have any authentication functionality (we rely on GitHub OAuth2). We send no transactional emails (we have no transactions) and have no email-based login or password-reset functionality. Therefore, this level of security is not valuable and not necessary.
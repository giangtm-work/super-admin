# Changelog
___

## 1.0.0
___
### Init project
```markdown
npx create-nx-workspace@latest
```
create-nx-workspace@19.3.0

* ✔ Where would you like to create your workspace? · super-admin
* ✔ Which stack do you want to use? · angular
* ✔ Integrated monorepo, or standalone project? · standalone
* ✔ Which bundler would you like to use? · esbuild
* ✔ Default stylesheet format · scss
* ✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
* ✔ Test runner to use for end to end (E2E) tests · playwright
* ✔ Do you want Nx Cloud to make your CI fast? · skip

### Pre-commit (https://dev.to/wdp/using-husky-pre-commit-git-hook-with-prettier-2h1)
#### Install Husky (https://typicode.github.io/husky/get-started.html)
```markdown
npm install --save-dev husky
npx husky init
```

#### Only format staged files
```markdown
npm install lint-staged --save-dev
```

### Install Taiga UI (https://taiga-ui.dev/getting-started)
```markdown
npm i taiga-ui
npx nx g taiga-ui:ng-add
```
* ✔ Do you want to use global Taiga UI classes, such as 'tui-space', 'tui-skeleton', etc? (y/N) · true
* ✔ Do you want to use Taiga UI dialogs? (Y/n) · true
* ✔ Do you plan on using custom SVGs/icons or TUI editor? If `Yes` we will include ng-dompurify as sanitizer, read more: https://taiga-ui.dev/icons/bundled#sanitizer (Y/n) · true
* ✔ Do you want to use Taiga UI alerts? (Y/n) · true
* ✔ Choose additional packages to install · layout, addon-table

The main packages will be installed - core,cdk,kit,icons

TuiRootModule,TuiDialogModule,TuiAlertModule was added to /src/app/app.component.ts

Content of the app was wrapped with tui-root component in /src/app/./app.component.html

tui-icon
```markdown
https://www.figma.com/design/BB0umZol83xH6hh04RG4d8/Taiga-3.0-(Community)?t=WAHLGceYi4V0isZL-0
node_modules/@taiga-ui/icons/esm2015/all.js
```

```
npm i @taiga-ui/experimental
```

### Install Tailwindcss (https://tailwindcss.com/docs/installation)

```markdown
npx nx g @nx/angular:setup-tailwind super-admin
```
UPDATE package.json

CREATE tailwind.config.js

UPDATE src/styles.scss

___
* https://nx.dev/nx-api/angular
* npx nx list @nx/angular
___

### Implement `users` module
  ```
  npx nx g @nx/angular:library users --directory=modules/users
  npx nx g @nx/angular:component user-list --directory=modules/users/src/lib
  ```

### Implement shared libs
  ```
  npx nx g @nx/angular:library users-http --directory=libs/http-services/users-http
  cd libs/http-services/users-http/src/lib
  npx nx g @nx/angular:service users-http
  ```

### Implement `auth` module
```markdown
npm i jwt-decode
```

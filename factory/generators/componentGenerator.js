const path = '../src/components/'
const templatePath = './templates/component/'

const viewAction = {
  type: 'add',
  path: path + '{{camelCase name}}/{{camelCase name}}View.js',
  templateFile: templatePath + 'view.js.hbs'
}

const testViewAction = {
  type: 'add',
  path: path + '{{camelCase name}}/tests/{{camelCase name}}View.test.js',
  templateFile: templatePath + 'viewTest.js.hbs'
}

const shardsAction = {
  type: 'add',
  path: path + '{{camelCase name}}/{{camelCase name}}.shards.js',
  templateFile: templatePath + 'shards.js.hbs'
}

const containerAction = {
  type: 'add',
  path: path + '{{camelCase name}}/{{camelCase name}}Container.js',
  templateFile: templatePath + 'container.js.hbs'
}

// TODO: unlock when testing implementation is done
// const testContainerAction = {
//   type: 'add',
//   path: path + '{{camelCase name}}/{{camelCase name}}Container.test.js',
//   templateFile: templatePath + 'containerTest.js.hbs'
// }

const apiAction = {
  type: 'add',
  path: path + '{{camelCase name}}/{{camelCase name}}Api.js',
  templateFile: templatePath + 'api.js.hbs'
}

const indexAction = {
  type: 'add',
  path: path + '{{camelCase name}}/index.js',
  templateFile: templatePath + 'index.js.hbs'
}

module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name your component'
    },
    {
      type: 'confirm',
      name: 'container',
      message: 'Do you need container for logic?'
    },
    // TODO: unlock when testing implementation is done
    // {
    //   type: 'confirm',
    //   name: 'containerTest',
    //   message: 'Do you need test for the container?'
    // },
    {
      type: 'confirm',
      name: 'api',
      message: 'Do you need hoc for api calls?'
    }
  ],
  actions: ({ container, containerTest, api }) => {
    const actions = [viewAction, testViewAction, shardsAction]
    const pushAction = action => actions.push(action)

    if (container) {
      pushAction(containerAction)
    }

    // TODO:unlock when testing implementation is done
    // if (containerTest) {
    //   pushAction(testContainerAction)
    // }

    if (api) {
      pushAction(apiAction)
    }

    pushAction(indexAction)

    return actions
  }
}

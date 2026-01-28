# Quick Start

We're excited to announce the support for TARS-1.5! 🎉🎉🎉

The previous version of Desktop App version 0.0.8 will be upgraded to a new Desktop App 0.1.0 with support for both Computer and Browser operator.

<br />

## Prerequisites

Please install **Chrome** ([stable](https://www.google.com/chrome/)/[beta](https://www.google.com/chrome/beta/)/[dev](https://www.google.com/chrome/dev/)/[canary](https://www.google.com/chrome/canary/)), **Edge** ([stable](https://www.microsoft.com/en-us/edge/download)/[beta/dev/canary](https://www.microsoft.com/en-us/edge/download/insider)), or **Firefox** ([stable](https://www.mozilla.org/en-US/firefox/new/)/[beta/dev/nightly](https://www.mozilla.org/zh-CN/firefox/channel/desktop/)) for **Browser Operator**.

Desktop App is currently only available for single monitor setup. Multi-monitor configuration may cause failure for some tasks.

<br />

## Download

You can download the [latest release](https://github.com//Desktop App/releases/latest) version of Desktop App from our releases page.

> **Note**: If you have [Homebrew](https://brew.sh/) installed, you can install Desktop App by running the following command:
> ```bash
> brew install --cask TARS
> ```

<br />

## Install

### MacOS

1. Drag **UI TARS** application into the **Applications** folder

2. Enable the permission of **UI TARS** in MacOS:
 - System Settings -> Privacy & Security -> **Accessibility**
 - System Settings -> Privacy & Security -> **Screen Recording**

3. Then open **UI TARS** application, you can see the following interface:


### Windows

**Still to run** the application, you can see the following interface:


<br />


## Run remote operator

The Remote Operator service will be discontinued on August 20, 2025. If you wish to deploy your own Remote Computer and Browser Agent after the free trial, you can explore Volcano Engine's OS Agent Services.

Deployment Links (in Chinese): [Computer Use Agent](https://console.volcengine.com/vefaas/region:vefaas+cn-beijing/application/create?templateId=680b0a890e881f000862d9f0&channel=github&source=TARS) and [Browser Use Agent](https://console.volcengine.com/vefaas/region:vefaas+cn-beijing/application/create?templateId=67f7b4678af5a6000850556c&channel=github&source=TARS)


<br />


## Get model and run local operator

### TARS-1.5 on [Hugging Face](https://endpoints.huggingface.co/catalog)

1. Click the button `Deploy from Hugging Face` on the top right corner of the page

2. Select the model TARS-1.5-7B

3. Refer to [README_deploy.md](https://github.com//TARS/blob/main/README_deploy.md) for detailed deployment instructions to obtain the **Base URL**, **API Key**, and **Model Name**.

4. Open the Desktop App App [Settings]((./setting.md)) and configure:

```yaml
Language: en
VLM Provider: Hugging Face for TARS-1.5
VLM Base URL: https:xxx
VLM API KEY: your_api_key
VLM Model Name: xxx
```

> [!NOTE]
> 1. For VLM Provider, make sure to select "**Hugging Face for TARS-1.5**" to ensure proper VLM Action parsing.
> 2. For VLM Base URL & VLM Model Name, you can checkout your huggingface endpoint page to see detail information. Please make sure Base URL ends with '/v1/'
>


5. Click button starting a new chat


6. Input the command to start a round of GUI operation tasks!




<br />



### Doubao-1.5-TARS on [VolcEngine](https://console.volcengine.com/ark/region:ark+cn-beijing/model/detail?Id=doubao-1-5-TARS)


1. Visit the [VolcEngine Doubao-1.5-TARS page](https://console.volcengine.com/ark/region:ark+cn-beijing/model/detail?Id=doubao-1-5-TARS)


2. Click the button `Try (立即体验)` on the top right corner of the page

3. Click the `API inference (API 接入)` link

4. Get your **API Key** from STEP 1 in the drawer panel.

5. In STEP 2, authenticate your user info and switch to the OpenAI SDK tab to obtain **Base Url** and **Model name**：

6. Open the Desktop App App [Settings]((./setting.md)) and configure:

```yaml
Language: cn
VLM Provider: VolcEngine Ark for Doubao-1.5-TARS
VLM Base URL: https://ark.cn-beijing.volces.com/api/v3
VLM API KEY: YOUR_API_KEY
VLM Model Name: doubao-1.5-TARS-250328
```

> [!NOTE]
> For VLM Provider, make sure to select "**VolcEngine Ark for Doubao-1.5-TARS**" to ensure proper VLM Action parsing.



7. Select the desired usage scenario before starting a new chat


> [!NOTE]
> Before using `Browser Operator` mode, please ensure that Chrome, Edge, or Firefox is installed on your device.

8. Input the command to start a round of GUI operation tasks!


<br>


## More

At this point, you should have successfully launched the Desktop App App! To get the most out of TARS and ensure stable usage, we recommend reviewing the following documentation:

- Read the [Settings Configuration Guide](./setting.md) and set up VLM/Chat parameters. Selecting the appropriate VLM Provider can optimize desktop app performance when using model.
- Read the [TARS-1.5 Deployment Guide](https://github.com//TARS/blob/main/README_deploy.md) for more detail about the TARS-1.5's latest deployment methods.
- Read the [TARS 模型部署教程](https://.sg.larkoffice.com/docx/TCcudYwyIox5vyxiSDLlgIsTgWf) for more detail about the Doubao-1.5-TARS's latest deployment methods.



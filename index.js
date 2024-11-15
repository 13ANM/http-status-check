const core = require('@actions/core')
const fetch = require('node-fetch')

const SUCCESS_STATUS_CODE = 200

;(async () => {
	try {
		// Get the input URL
		const url = core.getInput('url')

		core.info(`Checking the HTTP status of: ${url}`)

		// Send the HTTP request
		const response = await fetch(url)
		const statusCode = response.status

		core.info(`HTTP Status Code: ${statusCode}`)

		// Fail the action if the status is not 200
		if (statusCode !== SUCCESS_STATUS_CODE) {
			core.setFailed(`Failed: Received status code ${statusCode}`)
		}
	} catch (error) {
		core.setFailed(`Error checking HTTP status: ${error.message}`)
	}
})()

import React from "react";
import { IShowFormStep } from ".";
import { Button, Form, Input, Select } from "antd";

const Basic = ({
  activeStep,
  setActiveStep,
  setShowFormData,
  showFormData,
}: IShowFormStep) => {
  let disableNextButton = false;
  if (
    !showFormData.title ||
    !showFormData.type ||
    !showFormData.gener ||
    !showFormData.durationInMinutes
  ) {
    disableNextButton = true;
  }
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Form.Item label={"Title"} required>
          <Input
            value={showFormData.title}
            onChange={(e) =>
              setShowFormData({ ...showFormData, title: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label={"Type"} required>
          <Select
            value={showFormData.type}
            onChange={(value) =>
              setShowFormData({ ...showFormData, type: value })
            }
          >
            <Select.Option value="movie">Movie</Select.Option>
            <Select.Option value="web-series">Web Series</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={"Genre"} required>
          <Select
            value={showFormData.gener}
            onChange={(value) =>
              setShowFormData({ ...showFormData, gener: value })
            }
          >
            <Select.Option value="actions">Actions</Select.Option>
            <Select.Option value="comedy">Comedy</Select.Option>
            <Select.Option value="drama">Drama</Select.Option>
            <Select.Option value="romance">Romance</Select.Option>
            <Select.Option value="thriller">Thriller</Select.Option>
            <Select.Option value="horror">Horror</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <Form.Item label="Description">
        <Input.TextArea
          value={showFormData.description}
          onChange={(e) =>
            setShowFormData({ ...showFormData, description: e.target.value })
          }
        />
      </Form.Item>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Form.Item label="Thearitical Release Date">
          <Input
            type="date"
            value={showFormData.theariticalReleaseDate}
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                theariticalReleaseDate: e.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item label="OTT Release Date">
          <Input
            type="date"
            value={showFormData.ottReleaseDate}
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                ottReleaseDate: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item label="Duration in minutes">
          <Input
            type="number"
            value={showFormData.durationInMinutes}
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                durationInMinutes: e.target.value,
              })
            }
          />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-7">
        <Button>Cancle</Button>
        <Button
          type="primary"
          onClick={() => setActiveStep(activeStep + 1)}
          disabled={disableNextButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Basic;
